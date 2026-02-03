import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section id="contact" className="py-16 px-4">
      <RevealOnScroll>
        <div className="w-full max-w-md mx-auto">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Name..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm sm:text-base text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
