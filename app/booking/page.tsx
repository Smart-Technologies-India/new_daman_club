"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";

type InquiryType = "stay" | "event" | "package";

type BookingFormData = {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: "email" | "phone" | "whatsapp";
  startDate: string;
  endDate: string;
  dateFlexibility: "fixed" | "plusminus3" | "plusminus7";
  adults: number;
  children: number;
  rooms: "1" | "2" | "3" | "4+";
  eventType: string;
  estimatedGuests: string;
  venueIndoor: boolean;
  venueOutdoor: boolean;
  serviceCatering: boolean;
  serviceAv: boolean;
  serviceDecoration: boolean;
  serviceOvernight: boolean;
  specialRequests: string;
  agree: boolean;
};

const initialFormData: BookingFormData = {
  inquiryType: "stay",
  fullName: "",
  email: "",
  phone: "",
  contactMethod: "email",
  startDate: "",
  endDate: "",
  dateFlexibility: "fixed",
  adults: 1,
  children: 0,
  rooms: "1",
  eventType: "",
  estimatedGuests: "",
  venueIndoor: false,
  venueOutdoor: false,
  serviceCatering: false,
  serviceAv: false,
  serviceDecoration: false,
  serviceOvernight: false,
  specialRequests: "",
  agree: false,
};

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showStayDetails =
    formData.inquiryType === "stay" || formData.inquiryType === "package";
  const showEventDetails =
    formData.inquiryType === "event" || formData.inquiryType === "package";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (name: "adults" | "children", value: string) => {
    const parsed = Number(value);
    setFormData((prev) => ({
      ...prev,
      [name]: Number.isNaN(parsed) ? 0 : parsed,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(initialFormData);
        // Clear success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <DemoHeader />

      <section className="relative h-[52vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/dji.jpeg"
            alt="Book your stay or event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sm md:text-base tracking-[0.25em] text-[#e2b714] mb-3">
            PLAN YOUR PERFECT VISIT
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Book Your Stay / Event
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto text-gray-100">
            Share your requirements and our team will get back with curated
            options.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border-2 border-[#e2b714]/30 rounded-xl shadow-xl p-6 md:p-10"
          >
            {isSubmitted && (
              <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
                Thank you. Your inquiry has been received. A confirmation email
                is sent automatically, and we usually respond within 24 hours.
              </div>
            )}
            {errorMessage && (
              <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 text-red-900">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  1. Request Type
                </h2>
                <p className="text-sm text-gray-500 mb-3">Inquiry Type *</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="border border-gray-200 rounded-lg p-4 hover:border-[#e2b714] transition-colors cursor-pointer flex gap-2 items-center">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="stay"
                      checked={formData.inquiryType === "stay"}
                      onChange={handleInputChange}
                      className="mr-2 accent-[#e2b714]"
                      required
                    />
                    Stay / Accommodation Only
                  </label>
                  <label className="border border-gray-200 rounded-lg p-4 hover:border-[#e2b714] transition-colors cursor-pointer flex gap-2 items-center">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="event"
                      checked={formData.inquiryType === "event"}
                      onChange={handleInputChange}
                      className="mr-2 accent-[#e2b714]"
                    />
                    Event Only (Wedding, Corporate, Party, etc.)
                  </label>
                  <label className="border border-gray-200 rounded-lg p-4 hover:border-[#e2b714] transition-colors cursor-pointer flex gap-2 items-center">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="package"
                      checked={formData.inquiryType === "package"}
                      onChange={handleInputChange}
                      className="mr-2 accent-[#e2b714]"
                    />
                    Stay + Event Package
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  2. Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactMethod"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  3. Dates &amp; Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Check-in / Event Start Date *
                    </label>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="endDate"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Check-out / Event End Date *
                    </label>
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dateFlexibility"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Are your dates flexible?
                    </label>
                    <select
                      id="dateFlexibility"
                      name="dateFlexibility"
                      value={formData.dateFlexibility}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                    >
                      <option value="fixed">Fixed Dates</option>
                      <option value="plusminus3">
                        Flexible (+/- 2-3 days)
                      </option>
                      <option value="plusminus7">Flexible (+/- 1 week)</option>
                    </select>
                  </div>
                </div>
              </div>

              {showStayDetails && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                    4. Guest &amp; Accommodation Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="adults"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Number of Adults (12+ yrs) *
                      </label>
                      <input
                        id="adults"
                        name="adults"
                        type="number"
                        min={1}
                        value={formData.adults}
                        onChange={(e) =>
                          handleNumberChange("adults", e.target.value)
                        }
                        required={showStayDetails}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="children"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Number of Children (2-11 yrs)
                      </label>
                      <input
                        id="children"
                        name="children"
                        type="number"
                        min={0}
                        value={formData.children}
                        onChange={(e) =>
                          handleNumberChange("children", e.target.value)
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rooms"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Number of Rooms Needed
                      </label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {showEventDetails && (
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                    5. Event Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding / Reception</option>
                        <option value="corporate">
                          Corporate / Conference
                        </option>
                        <option value="birthday">Birthday / Anniversary</option>
                        <option value="retreat">Retreat</option>
                        <option value="social">Social Gathering / Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="estimatedGuests"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Estimated Number of Guests *
                      </label>
                      <input
                        id="estimatedGuests"
                        name="estimatedGuests"
                        type="number"
                        min={1}
                        value={formData.estimatedGuests}
                        onChange={handleInputChange}
                        required={showEventDetails}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none text-black bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <p className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Setup / Venue Preference
                      </p>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="venueIndoor"
                          checked={formData.venueIndoor}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Indoor Hall
                      </label>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="venueOutdoor"
                          checked={formData.venueOutdoor}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Outdoor Garden / Lawn
                      </label>
                    </div>

                    <div>
                      <p className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Services Required
                      </p>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="serviceCatering"
                          checked={formData.serviceCatering}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Food &amp; Beverage Catering
                      </label>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="serviceAv"
                          checked={formData.serviceAv}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Audio / Visual &amp; Stage Setup
                      </label>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="serviceDecoration"
                          checked={formData.serviceDecoration}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Event Decoration / Floral
                      </label>
                      <label className="flex items-center gap-2 py-2 text-gray-700">
                        <input
                          type="checkbox"
                          name="serviceOvernight"
                          checked={formData.serviceOvernight}
                          onChange={handleCheckboxChange}
                          className="accent-[#e2b714]"
                        />
                        Overnight Guest Accommodation
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  6. Special Requests / Remarks
                </h2>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={5}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Dietary restrictions, accessibility needs, itinerary requirements, etc."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#e2b714] focus:outline-none resize-none text-black bg-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  7. Submission
                </h2>
                <label className="flex items-start gap-2 text-gray-700 mb-6">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 accent-[#e2b714]"
                  />
                  <span>
                    I agree to the Privacy Policy and Terms of Service.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#e2b714] hover:bg-[#c19910] disabled:bg-gray-400 text-white font-bold py-3 px-10 rounded-lg transition-all shadow-lg hover:shadow-xl tracking-wider"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
