import React, { useEffect, useRef, useState } from 'react';

// Simple DeviceFrame component supports 'macbook', 'ipad', 'iphone'
// Props:
// - type: 'macbook' | 'ipad' | 'iphone'
// - src: image src or demo URL
// - useIframe: boolean -> try to render iframe when true, fallback to image
// DeviceFrame: shows either an iframe (live demo) or an image preview.
// For security and crawler/preview stability we avoid using iframes for
// third-party/demo URLs by default (they can inject scripts/CSS and trigger
// CORS/sandbox issues). If you need to allow a specific host, add it to
// `IFRAME_WHITELIST` below.
export default function DeviceFrame({ type = 'macbook', src, useIframe = false, title = '' }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeTimedOut, setIframeTimedOut] = useState(false);
  const timeoutRef = useRef(null);

  // Whitelist hosts that are safe to embed as iframes (add domains here if needed)
  const IFRAME_WHITELIST = [
    // example: 'your-trusted-domain.com'
  ];

  useEffect(() => {
    // reset state when src/useIframe changes
    setIframeLoaded(false);
    setIframeTimedOut(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (useIframe && src) {
      // if iframe hasn't loaded in 2500ms, show an overlay prompting to open in new tab
      timeoutRef.current = setTimeout(() => setIframeTimedOut(true), 2500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [src, useIframe]);

  const onIframeLoad = () => {
    setIframeLoaded(true);
    setIframeTimedOut(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Allow embedding when the caller requested an iframe (useIframe=true)
  const canUseIframe = Boolean(useIframe && src);

  const screenContent = (
    <div className="relative h-full w-full bg-background">
      {canUseIframe && src ? (
        <iframe
          src={src}
          title={title || 'Project preview'}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          onLoad={onIframeLoad}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        <img src={src} alt={title} className="h-full w-full object-cover" loading="lazy" />
      )}

      {/* overlay for iframe fallback / open in new tab */}
      {canUseIframe && src && (iframeTimedOut || !iframeLoaded) && (
        <div className="absolute inset-0 flex items-end justify-end p-3">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-accent px-3 py-1 text-xs font-mono text-background shadow-md"
          >
            Open demo
          </a>
        </div>
      )}
    </div>
  );

  if (type === 'iphone') {
    return (
      <div className="inline-block w-60 rounded-3xl border-2 border-panel-border bg-black shadow-lg">
        <div className="flex justify-center border-b border-panel-border p-3">
          <div className="h-1 w-20 rounded-md bg-panel" />
        </div>
        <div className="h-[520px] overflow-hidden rounded-2xl bg-background">{screenContent}</div>
      </div>
    );
  }

  if (type === 'ipad') {
    return (
      <div className="inline-block w-96 rounded-2xl border-2 border-panel-border bg-black shadow-lg">
        <div className="h-[720px] overflow-hidden rounded-t-lg bg-background">{screenContent}</div>
        <div className="flex justify-center border-t border-panel-border p-3">
          <div className="h-1 w-32 rounded-md bg-panel" />
        </div>
      </div>
    );
  }

  // default to macbook
  return (
    <div className="inline-block w-full max-w-5xl rounded-xl border-2 border-panel-border bg-black shadow-lg">
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-panel-border px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="h-[560px] overflow-hidden rounded-b-lg bg-background">{screenContent}</div>
    </div>
  );
}
