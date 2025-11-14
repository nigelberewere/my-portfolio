import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db, collection, addDoc, serverTimestamp } from '../firebase/firebaseconfig';
import { siteConfig } from '../data/config';

const formInputClass =
  'w-full rounded-md border border-panel-border bg-background p-3 font-mono text-text placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';
const formErrorClass = 'mt-1 text-sm text-error';

export default function ContactForm() {
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

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
      // Add a new document with a generated id.
      await addDoc(collection(db, 'contacts'), {
        ...data,
        submittedAt: serverTimestamp(),
      });

      setFormState('success');
      reset();
    } catch (e) {
      console.error('Error adding document: ', e);
      setErrorMessage(
        'There was an error sending your message. Please try again.'
      );
      setFormState('error');
    }
  };

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