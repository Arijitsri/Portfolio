import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // ✅ Your Web3Forms Access Key (replace with your real one)
    formData.append("access_key", "eca9c55f-18f8-413a-9139-866470d6fd33");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
    >
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            📬 Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question, idea, or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        {/* ✅ Contact Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              dark:border-gray-700 dark:bg-gray-800 dark:text-white 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
              dark:border-gray-700 dark:bg-gray-800 dark:text-white 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
            dark:border-gray-700 dark:bg-gray-800 dark:text-white 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 
            text-white font-semibold rounded-full shadow 
            hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* ✅ Show Result Message */}
        {result && (
          <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
            {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
