'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Get In <span style={{ color: '#ad8b3a' }}>Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Whether you have questions about memberships, facilities, or events, our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl text-center hover:border-[#ad8b3a] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#1a5946] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Call Us</h3>
              <p className="text-gray-700 font-semibold mb-1">+91-9311303001</p>
              <p className="text-gray-500 text-sm mb-3">(Booking Issues)</p>
              <p className="text-gray-700 font-semibold mb-1">011-20861731</p>
              <p className="text-gray-500 text-sm">(Other Queries)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl text-center hover:border-[#ad8b3a] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#1a5946] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email Us</h3>
              <p className="text-gray-700 font-semibold mb-2">support@damanclub.in</p>
              <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl text-center hover:border-[#ad8b3a] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#1a5946] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Visit Us</h3>
              <p className="text-gray-700 font-semibold mb-2">Daman Golf Course</p>
              <p className="text-gray-500 text-sm">Daman, India</p>
              <p className="text-gray-500 text-sm mt-2">Open Daily: 6:00 AM - 8:00 PM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white border-2 border-[#ad8b3a]/30 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Send Us A <span style={{ color: '#ad8b3a' }}>Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ad8b3a] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ad8b3a] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ad8b3a] focus:outline-none transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ad8b3a] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="booking">Booking & Reservations</option>
                      <option value="events">Events & Tournaments</option>
                      <option value="facilities">Facilities Information</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#ad8b3a] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ad8b3a] hover:bg-[#8d7330] text-white font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white border-2 border-[#ad8b3a]/30 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54696990263!2d72.73989657910156!3d20.414247900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce87583f88ad%3A0x6c7c6c6c6c6c6c6c!2sDaman%2C%20Dadra%20and%20Nagar%20Haveli%20and%20Daman%20and%20Diu!5e0!3m2!1sen!2sin!4v1734096000000!5m2!1sen!2sin"
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
              <div className="bg-white border-2 border-[#ad8b3a]/30 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Business <span style={{ color: '#ad8b3a' }}>Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Holidays</span>
                    <span className="text-gray-900 font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-[#1a5946]/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold" style={{ color: '#1a5946' }}>Note:</span> Last tee time is 1 hour before closing. Please call ahead for holiday hours.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked <span style={{ color: '#ad8b3a' }}>Questions</span>
            </h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I book a tee time?",
                answer: "You can book online through our website, call us directly at +91-9311303001, or visit our clubhouse. We recommend booking at least 2-3 days in advance for weekend slots."
              },
              {
                question: "What are your membership options?",
                answer: "We offer various membership plans including Individual, Family, Corporate, and Student memberships. Each comes with exclusive benefits and privileges. Contact us for detailed information."
              },
              {
                question: "Do you provide equipment rentals?",
                answer: "Yes, we have a fully stocked pro shop with equipment rentals available. Please reserve in advance to ensure availability."
              },
              {
                question: "Are golf lessons available?",
                answer: "Absolutely! We have certified professionals offering individual and group lessons for all skill levels. Contact us to schedule your first lesson."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#ad8b3a]/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t-2 border-[#ad8b3a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ad8b3a' }}>Phone</h3>
              <p className="text-gray-700 font-medium">+91-9311303001</p>
              <p className="text-gray-500 text-sm mt-1">(Booking Issues)</p>
              <p className="text-gray-700 font-medium mt-2">011-20861731</p>
              <p className="text-gray-500 text-sm mt-1">(Other Queries)</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ad8b3a' }}>Email</h3>
              <p className="text-gray-700 font-medium">support@damanclub.in</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#ad8b3a' }}>
                Follow Us
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1a5946] hover:bg-[#ad8b3a] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  F
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1a5946] hover:bg-[#ad8b3a] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  T
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1a5946] hover:bg-[#ad8b3a] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  I
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#1a5946] hover:bg-[#ad8b3a] text-white rounded-full flex items-center justify-center transition-colors shadow-md"
                >
                  L
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#ad8b3a]/30 mt-8 pt-8 text-center text-gray-500">
            <p>Copyright © 2025 - Daman Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
