import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
          <p className="text-gray-300">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500 text-xl" />
              <span>sachinthaprabhashana2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-500 text-xl" />
              <span>+94 762717290</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-500 text-xl" />
              <span>Matara, Sri Lanka</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4 bg-gray-800 bg-opacity-20 p-6 rounded-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            defaultValue="Sachintha Prabashana"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            defaultValue="sachinthaprabhashana2003@gmail.com"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            defaultValue="Project Inquiry"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="p-3 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            defaultValue="Tell me about your project..."
          ></textarea>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}