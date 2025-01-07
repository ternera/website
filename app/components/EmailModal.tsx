import React, { useState, useEffect } from "react";

export default function EmailModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "g-recaptcha-response": "",
  });

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const response = await fetch("https://formspree.io/xkndrgap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, "g-recaptcha-response": recaptchaResponse }),
    });

    if (response.ok) {
      alert("Email sent successfully!");
      onClose();
    } else {
      alert("Failed to send email.");
    }
  };

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal-overlay" onClick={handleOutsideClick}>
      <div className="bg-white dark:bg-[#1C1C1C] p-6 rounded shadow-lg border border-gray-300 dark:border-gray-700">
        <h2 className="text-xl mb-4 text-[#1C1C1C] dark:text-[#D4D4D4]">Send an Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-[#1C1C1C] dark:text-[#D4D4D4]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-[#2C2C2C] dark:border-gray-700 dark:text-[#D4D4D4]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-[#1C1C1C] dark:text-[#D4D4D4]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-[#2C2C2C] dark:border-gray-700 dark:text-[#D4D4D4]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-[#1C1C1C] dark:text-[#D4D4D4]">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded dark:bg-[#2C2C2C] dark:border-gray-700 dark:text-[#D4D4D4]"
              required
            />
          </div>
          <div className="g-recaptcha" data-sitekey="6LeZQHwpAAAAAINsgjqmEnKjKioklcW1TNuViSsz"></div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-300 rounded dark:bg-gray-700 dark:text-[#D4D4D4]"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}