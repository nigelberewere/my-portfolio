import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { db, collection, addDoc, serverTimestamp } from '../firebase/firebaseconfig';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../data/config';

const formInputClass =
  'w-full rounded-md border border-panel-border bg-background p-3 font-mono text-text placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';
const formErrorClass = 'mt-1 text-sm text-error';

export default function ContactForm() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setFormState('loading');
    setErrorMessage('');
    try {
      // Prepare EmailJS and Firestore operations and run them concurrently
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'TnxroBPksrH-aBnGz';

      const emailPromise = emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        publicKey
      );

      const dbPromise = addDoc(collection(db, 'contacts'), {
        ...data,
        submittedAt: serverTimestamp(),
      });

      // Run both operations concurrently and handle partial failures
      const results = await Promise.allSettled([emailPromise, dbPromise]);

      const emailResult = results[0];
      const dbResult = results[1];

      if (emailResult.status === 'fulfilled' && dbResult.status === 'fulfilled') {
        setFormState('success');
        setShowToast(true);
        reset();
      } else if (dbResult.status === 'fulfilled' && emailResult.status === 'rejected') {
        // Firestore saved, email failed
        console.warn('Email failed but saved to Firestore:', emailResult.reason);
        setFormState('success');
        setShowToast(true);
        setErrorMessage('Message saved but email delivery failed.');
        reset();
      } else if (emailResult.status === 'fulfilled' && dbResult.status === 'rejected') {
        // Email sent but saving failed
        console.warn('Email sent but Firestore save failed:', dbResult.reason);
        setFormState('success');
        setShowToast(true);
        setErrorMessage('Email sent but failed to save a backup.');
        reset();
      } else {
        // Both failed
        throw new Error('Both email delivery and Firestore save failed.');
      }
    } catch (e) {
      console.error('Error adding document: ', e);
      setErrorMessage(
        'There was an error sending your message. Please try again.'
      );
      setFormState('error');
    }
  };

  // Auto-hide toast after success
  useEffect(() => {
    let t;
    if (showToast) {
      t = setTimeout(() => setShowToast(false), 4500);
    }
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h3 className="text-center font-mono text-2xl text-heading">
        Send me a message
      </h3>
      <div>
        <label htmlFor="name" className="mb-2 block font-mono text-sm text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={formInputClass}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className={formErrorClass}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-mono text-sm text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={formInputClass}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className={formErrorClass}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-sm text-text">
          Message
        </label>
        <textarea
          id="message"
          rows="5"
          className={formInputClass}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className={formErrorClass}>{errors.message.message}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full rounded-md border border-accent bg-accent px-6 py-3 font-mono text-lg font-bold text-background transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {formState === 'success' && (
          <p className="mt-4 text-sm text-success">
            Thank you! Your message has been sent.
          </p>
        )}
        {formState === 'error' && (
          <p className="mt-4 text-sm text-error">{errorMessage}</p>
        )}
      </div>

      {/* Toast notification (top-right) */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-6 right-6 z-50 w-auto max-w-xs rounded-md border border-panel-border bg-panel px-4 py-3 shadow-lg"
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-mono font-bold text-sm text-heading">Message sent</p>
              <p className="mt-1 font-mono text-sm text-text">Thanks — I will get back to you shortly.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              aria-label="Dismiss notification"
              className="ml-3 rounded p-1 text-text hover:text-accent"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <p className="pt-4 text-center font-mono text-sm text-text">
        or email me directly at{' '}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}