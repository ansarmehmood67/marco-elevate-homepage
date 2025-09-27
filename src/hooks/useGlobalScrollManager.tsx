import { useEffect, useCallback, useRef } from 'react';

interface ScrollCallback {
  id: string;
  callback: (scrollY: number) => void;
  options?: {
    throttle?: number;
    passive?: boolean;
  };
}

class GlobalScrollManager {
  private callbacks: Map<string, ScrollCallback> = new Map();
  private isListening = false;
  private lastScrollY = 0;
  private ticking = false;

  subscribe(id: string, callback: (scrollY: number) => void, options?: ScrollCallback['options']) {
    this.callbacks.set(id, { id, callback, options });
    
    if (!this.isListening) {
      this.startListening();
    }
  }

  unsubscribe(id: string) {
    this.callbacks.delete(id);
    
    if (this.callbacks.size === 0) {
      this.stopListening();
    }
  }

  private startListening() {
    this.isListening = true;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  private stopListening() {
    this.isListening = false;
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        this.lastScrollY = scrollY;
        
        this.callbacks.forEach((callbackData) => {
          callbackData.callback(scrollY);
        });
        
        this.ticking = false;
      });
      this.ticking = true;
    }
  };
}

const globalScrollManager = new GlobalScrollManager();

export const useGlobalScrollManager = (
  id: string,
  callback: (scrollY: number) => void,
  options?: ScrollCallback['options']
) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const stableCallback = useCallback((scrollY: number) => {
    callbackRef.current(scrollY);
  }, []);

  useEffect(() => {
    globalScrollManager.subscribe(id, stableCallback, options);
    
    return () => {
      globalScrollManager.unsubscribe(id);
    };
  }, [id, stableCallback, options]);
};