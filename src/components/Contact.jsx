import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LuSend } from "react-icons/lu";
import emailjs from 'emailjs-com'

const Contact = () => {
  const { theme } = useSelector((state) => state.theme);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID;
const email_template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const email_public_key = import.meta.env.VITE_PUBLIC_KEY;

  useEffect(() => {
    console.log("Service_id -- ", service_id)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        service_id, 
        email_template_id,
        {
          from_name: form.name,
          message: form.message + "\nHere is my Email : " + form.email,
        },
        email_public_key 
      ).catch((err) => {
        console.log("error - ", err?.message || err);
      })
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 px-6 sm:px-12 transition-colors duration-300  ${theme === "dark"
        ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white"
        : "bg-gradient-to-bl  from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className=" text-3xl md:text-4xl font-bold mb-6">
          Let’s build something amazing together
        </h2>
        <p className="mb-12 text-lg opacity-80">
          Feel free to reach out for collaborations, freelance projects, or just
          a friendly chat.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl shadow-2xl p-4 backdrop-blur-xl ${theme === "dark"
            ? "bg-white/10 border border-white/20"
            : "bg-white border border-gray-200"
            }`}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`peer w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${theme === "dark"
                  ? "bg-gray-800 text-white placeholder-transparent border border-gray-700 focus:ring-purple-400"
                  : "bg-gray-100 text-gray-900 placeholder-transparent border border-gray-300 focus:ring-purple-600"
                  }`}
                placeholder="Your Name"
              />
              <label
                className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-500"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`peer w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${theme === "dark"
                  ? "bg-gray-800 text-white placeholder-transparent border border-gray-700 focus:ring-purple-400"
                  : "bg-gray-100 text-gray-900 placeholder-transparent border border-gray-300 focus:ring-purple-600"
                  }`}
                placeholder="Your Email"
              />
              <label
                className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-500"
              >
                Your Email
              </label>
            </div>
          </div>

          <div className="relative mt-6">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className={`peer w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${theme === "dark"
                ? "bg-gray-800 text-white placeholder-transparent border border-gray-700 focus:ring-purple-400"
                : "bg-gray-100 text-gray-900 placeholder-transparent border border-gray-300 focus:ring-purple-600"
                }`}
              placeholder="Your Message"
            ></textarea>
            <label
              className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-500"
            >
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-6 w-full py-4 flex items-center justify-center gap-2  rounded-xl bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 text-white
             font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message <LuSend className="h-6 w-6" />
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-12 text-3xl">
          {[
            { Icon: FaGithub, link: "https://github.com/shyamkrsh" },
            { Icon: FaLinkedin, link: "https://linkedin.com/in/shyamkrsh" },
            { Icon: FaTwitter, link: "https://twitter.com/shyamkrsh" },
          ].map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full transition-all ${theme === "dark"
                ? "bg-white/10 text-white hover:bg-purple-500/20"
                : "bg-gray-200 text-gray-800 hover:bg-purple-100"
                }`}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Direct Email */}
        <p className="mt-8 text-lg">
          Or drop me a mail directly at{" "}
          <a
            href="mailto:yourname@email.com"
            className="text-purple-500 hover:underline"
          >
            shyamkrcse@email.com
          </a>
        </p>
        <motion.p
          className={`text-sm mt-4 ${theme ? "text-gray-500" : "text-gray-500"
            }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          © 2025 Shyam Kumar Sharma. All Rights Reserved.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
