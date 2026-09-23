"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sm tracking-widest text-[#e2b714] mb-4">
            WE&apos;RE HERE TO HELP
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            We&apos;d love to hear from you. Whether you have questions about
            memberships, facilities, or events, our team is here to help
          </p>
        </motion.div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border-2 border-[#e2b714]/30 p-8 rounded-lg text-center hover:border-[#e2b714] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#e2b714] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
              <p className="text-gray-700 font-semibold mb-2">+91-6359900485</p>
              <p className="text-gray-500 text-sm">Available Daily</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-[#e2b714]/30 p-8 rounded-lg text-center hover:border-[#e2b714] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#e2b714] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
              <p className="text-gray-700 font-semibold mb-2">
                thedamanclub@gmail.com
              </p>
              <p className="text-gray-500 text-sm">
                We&apos;ll respond within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border-2 border-[#e2b714]/30 p-8 rounded-lg text-center hover:border-[#e2b714] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#e2b714] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Visit Us</h3>
              <p className="text-gray-700 font-semibold mb-2">The Daman Club</p>
              <p className="text-gray-500 text-sm">
                Opp Tourism Department, Bandodkar Sports Complex, Near Daman Bus
                Stand, Daman - 396210
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white border-2 border-[#e2b714]/30 rounded-lg p-8 shadow-lg">
                <h2 className="font-serif text-3xl font-bold mb-2 text-gray-900">
                  Send Us A Message
                </h2>
                <p className="text-[#e2b714] text-sm tracking-widest mb-6">
                  WE&apos;LL GET BACK TO YOU SOON
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {successMessage && (
                    <div className="p-4 bg-green-100 border-2 border-green-500 text-green-700 rounded-lg">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none transition-colors text-black placeholder:text-gray-500 bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none transition-colors text-black placeholder:text-gray-500 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none transition-colors text-black placeholder:text-gray-500 bg-white"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none transition-colors text-black bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="booking">Booking & Reservations</option>
                      <option value="events">Events & Celebrations</option>
                      <option value="facilities">Facilities Information</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none transition-colors resize-none text-black placeholder:text-gray-500 bg-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#e2b714] hover:bg-[#c19910] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl tracking-widest"
                  >
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white border-2 border-[#e2b714]/30 rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.1234520376997!2d72.83655032432465!3d20.416458938562418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d1f64b4fcf25%3A0x3db6d2b00c2113ef!2sThe%20Daman%20Club!5e1!3m2!1sen!2sin!4v1790145479052!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Daman Club Location"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-white border-2 border-[#e2b714]/30 rounded-lg p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-2 text-gray-900">
                  Business Hours
                </h3>
                <p className="text-[#e2b714] text-sm tracking-widest mb-6">
                  VISIT US ANYTIME
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">
                      Monday - Friday
                    </span>
                    <span className="text-gray-900 font-semibold">
                      10:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">
                      10:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">
                      10:00 AM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Holidays</span>
                    <span className="text-gray-900 font-semibold">
                      10:00 AM - 7:00 PM
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#e2b714]/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#e2b714]">Note:</span>{" "}
                    Please call ahead for holiday hours and special event
                    bookings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-widest text-[#e2b714] mb-4">
              COMMON QUESTIONS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How do I book facilities or rooms?",
                answer:
                  "You can book online through our website, call us directly at +91-6359900485, or visit our clubhouse. We recommend booking at least 2-3 days in advance for weekend slots.",
              },
              {
                question: "What are your membership options?",
                answer:
                  "We offer various membership plans including Basic, Premium, Elite, and Corporate memberships. Each comes with exclusive benefits and privileges. Visit our Membership page for detailed information.",
              },
              {
                question: "Do you host weddings and corporate events?",
                answer:
                  "Absolutely! We have both indoor and outdoor venues perfect for weddings, corporate events, and celebrations. Our team will help you plan every detail to make your event memorable.",
              },
              {
                question: "What facilities are available for guests?",
                answer:
                  "We offer swimming pool, gym, gaming area (billiards, squash, archery), restaurant, theater room, kids activity zone, and more. All facilities are accessible based on your membership or booking.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#e2b714]/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
