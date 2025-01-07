import React, { useEffect } from "react";

interface ReCAPTCHAProps {
  sitekey: string;
  onChange: (response: string) => void;
}

const ReCAPTCHA: React.FC<ReCAPTCHAProps> = ({ sitekey, onChange }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.grecaptcha.ready(() => {
      window.grecaptcha.render("recaptcha-container", {
        sitekey,
        callback: onChange,
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, [sitekey, onChange]);

  return <div id="recaptcha-container"></div>;
};

export default ReCAPTCHA;
