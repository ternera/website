import React, { useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: string,
        options: {
          sitekey: string;
          callback: (response: string) => void;
        }
      ) => void;
    };
  }
}

interface ReCAPTCHAProps {
  sitekey: string;
  onChange: (response: string) => void;
}

const ReCAPTCHA: React.FC<ReCAPTCHAProps> = ({ sitekey, onChange }) => {
  useEffect(() => {
    // Create script only if it doesn't exist
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render("recaptcha-container", {
          sitekey,
          callback: onChange,
        });
      });
    }
  }, [sitekey, onChange]);

  return <div id="recaptcha-container"></div>;
};

export default ReCAPTCHA;
