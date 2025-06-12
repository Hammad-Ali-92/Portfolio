import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare gtag as a global function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Initialize gtag function
window.gtag = function (...args: any[]) {
  window.dataLayer.push(args);
};

// Hook to initialize Google Analytics
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Add Google Analytics script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-5XE2FESRKW";
      
      script.onerror = () => {
        console.warn("Analytics failed to load - Development environment detected");
      };

      document.head.appendChild(script);

      // Initialize gtag
      window.gtag("js", new Date());
      window.gtag("config", "G-5XE2FESRKW", {
        send_page_view: false, // Disable automatic page views
        transport_url: "https://www.google-analytics.com", // Explicitly set transport URL
        debug_mode: process.env.NODE_ENV === "development"
      });

      // Track page views manually
      const trackPageView = () => {
        try {
          window.gtag("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname + location.search,
            send_to: "G-5XE2FESRKW"
          });
        } catch (error) {
          console.warn("Analytics event failed - Development environment detected");
        }
      };

      // Track initial page view
      trackPageView();

      return () => {
        document.head.removeChild(script);
      };
    } catch (error) {
      console.warn("Analytics initialization skipped - Development environment detected");
    }
  }, [location]);
};