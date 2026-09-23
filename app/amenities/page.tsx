"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";
import { useRouter } from "next/navigation";

export default function AmenitiesPage() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/amenities_main.jpeg"
            alt="Event Facilities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl mb-4 font-light tracking-widest">
              EXPERIENCE OUR
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Premium Amenities
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Where Versatility Meets Elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
            Versatile Event <span style={{ color: "#e2b714" }}>Amenities</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Welcome to our versatile Event Facility at The Daman Club, where
            seamless gatherings come to life. This dynamic space combines the
            elegance of a huge main lobby, the sophistication of a conference
            hall, the grandeur of a Main Ground and Front Lawn, along with our
            state-of-the-art Theater Room and comfortable stay accommodations.
            Every detail is tailored to ensure your event is a memorable
            success.
          </p>
        </motion.div>
      </section>

      {/* Event Facilities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Event <span style={{ color: "#e2b714" }}>Facilities</span>
            </h2>
            <p className="text-xl text-gray-700">
              Spaces designed for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Lobby */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Main Lobby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Huge Main Lobby
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Grandeur Awaits. Step into luxury and warmth as you enter our
                  Grand Main Lobby, the heart of our club. Gather with friends,
                  meet fellow members, or enjoy a moment of tranquility in an
                  inviting atmosphere.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Large Gatherings
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    Luxury Ambience
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conference Room */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&h=600&fit=crop"
                  alt="Conference Room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Conference Room
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discover a professional haven at The Daman Club&apos;s
                  Conference Hall, where business meets sophistication. Our
                  well-equipped conference hall provides an ideal setting for
                  corporate meetings, seminars, and conferences. With
                  state-of-the-art facilities, flexible seating arrangements,
                  and advanced audiovisual technology.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    A/V Technology
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Corporate Events
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Ground */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/amenities/2_main_ground.JPG"
                  alt="Main Ground"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Main Ground
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Step into expansive elegance at The Daman Club&apos;s Main
                  Ground, an outdoor haven where events unfold against a
                  backdrop of natural beauty. This versatile venue is ideal for
                  large gatherings, sports events, and outdoor celebrations.
                  With ample space and a dynamic layout, our Main Ground
                  provides a picturesque setting for a variety of occasions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Outdoor Events
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    Spacious Layout
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Front Lawn */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/amenities/3_front_lawn.JPG"
                  alt="Front Lawn"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Front Lawn
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to the picturesque Front Lawn at The Daman Club, where
                  natural beauty meets refined elegance. This outdoor haven is
                  perfect for intimate gatherings, ceremonies, and special
                  occasions. The lush greenery and carefully landscaped
                  surroundings provide a charming setting for your events.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Intimate Events
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Natural Beauty
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theater Room Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-125 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/amenities/4_theater_room.JPG"
                  alt="Theater Room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                Theater <span style={{ color: "#e2b714" }}>Room</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Indulge in cinematic magic at The Daman Club&apos;s Theatre
                Room. Experience movies like never before in our high-tech,
                comfortable theater.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Step into cinematic bliss at The Daman Club&apos;s Theatre Room.
                Our high-tech, comfortable theater offers an immersive
                experience for movie enthusiasts. Whether you&apos;re a film
                buff, hosting a private screening, or enjoying a family movie
                night, our Theatre Room is a haven for cinematic delights.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get ready to be transported into a world of visual and auditory
                splendor, where every movie becomes an unforgettable experience.
                Join us in creating moments of entertainment and relaxation in
                the heart of our club.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#e2b714]/10 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      High-Tech Sound
                    </h4>
                    <p className="text-sm text-gray-600">
                      Immersive audio system
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#e2b714]/10 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      HD Projection
                    </h4>
                    <p className="text-sm text-gray-600">
                      Crystal clear visuals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#e2b714]/10 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Luxury Seating
                    </h4>
                    <p className="text-sm text-gray-600">
                      Comfortable recliners
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#e2b714]/10 flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Private Screening
                    </h4>
                    <p className="text-sm text-gray-600">
                      Book exclusive shows
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Comfortable <span style={{ color: "#e2b714" }}>Stay</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Discover a haven of comfort in our inviting stay spaces. Whether
              you&apos;re a member seeking an exclusive retreat, a non-member in
              search of a guest getaway, or planning a special event, our
              accommodations offer warmth, convenience, and relaxation. Indulge
              in a tranquil escape with us and experience the essence of
              comfortable living.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* For Members */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop"
                  alt="Members Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#e2b714] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Members
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For Members
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Indulge in a tranquil escape with our Members&apos; Stay
                  Package. Enjoy a cozy stay for 2 adults and 1 kid (up to 12
                  years), with the option to add an extra bed. Experience
                  comfort and relaxation in a space crafted exclusively for our
                  cherished members.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    2 Adults + 1 Kid (up to 12 years)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Extra Bed Option Available
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Exclusive Member Benefits
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* For Events */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#e2b714]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop"
                  alt="Event Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#e2b714] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For Events
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Elevate your events with our Event Stay Packages. Enjoy a
                  delightful stay for 2 adults and 1 kid (up to 12 years), with
                  the option to add an extra bed. Experience warmth and
                  hospitality in a welcoming space designed for relaxation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    2 Adults + 1 Kid (up to 12 years)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Extra Bed Option Available
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Perfect for Event Guests
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* For Non-Members */}
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
                  alt="Guest Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Non-Members
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For Non-Members
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Make yourself at home with our Non-Members&apos; Stay Package.
                  Enjoy a comfortable stay for 2 adults and 1 kid (up to 12
                  years), with the option to add an extra bed. Experience
                  convenience and relaxation in accommodations designed for
                  special occasions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    2 Adults + 1 Kid (up to 12 years)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Extra Bed Option Available
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-3 text-[#e2b714]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Guest-Friendly Rates
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Call For Booking:</span> Ph:
              6359900485
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Experience Luxury?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Book your event or stay with us today and create unforgettable
            memories
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={() => {
                router.push("/booking");
              }}
              className="px-8 py-4 bg-[#e2b714] hover:bg-[#c19910] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Stay / Event
            </button>
            <button
              onClick={() => {
                router.push("/contact");
              }}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e2b714]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#e2b714]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                1000+ Capacity
              </h4>
              <p className="text-sm text-gray-600">Large Event Hosting</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e2b714]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#e2b714]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Modern Technology
              </h4>
              <p className="text-sm text-gray-600">Advanced A/V Systems</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e2b714]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#e2b714]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Comfortable Stay
              </h4>
              <p className="text-sm text-gray-600">Relaxing Accommodations</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e2b714]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#e2b714]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Premium Service
              </h4>
              <p className="text-sm text-gray-600">Exceptional Hospitality</p>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
