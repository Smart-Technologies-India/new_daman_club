"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";
import { useRouter } from "next/navigation";

const eventTypes = [
  {
    id: 1,
    name: "Weddings",
    tagline: "Celebrate Your Special Day",
    description:
      "Make your dream wedding a reality at The Daman Club. Our stunning venues, exceptional catering, and professional event management ensure your special day is perfect in every way.",
    image:
      "/images/weddings_events.jpeg",
    features: [
      "Indoor & Outdoor Venues",
      "Custom Decoration",
      "Catering Services",
      "1000+ Capacity",
    ],
  },
  {
    id: 2,
    name: "Corporate Events",
    tagline: "Professional Event Space",
    description:
      "Host successful corporate events with our state-of-the-art conference facilities, modern A/V equipment, and professional support staff. Perfect for conferences, seminars, and business meetings.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    features: [
      "Conference Hall",
      "A/V Equipment",
      "Business Amenities",
      "Flexible Seating",
    ],
  },
  {
    id: 3,
    name: "Social Celebrations",
    tagline: "Perfect Gathering Venue",
    description:
      "From birthday parties to anniversary celebrations, our versatile event spaces provide the ideal setting for all your special occasions with family and friends.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80",
    features: [
      "Flexible Spaces",
      "Party Setup",
      "Entertainment Options",
      "Custom Themes",
    ],
  },
  {
    id: 4,
    name: "Sports Events",
    tagline: "Indoor & Outdoor Venues",
    description:
      "Host sports tournaments and competitions at our Main Ground and sports facilities. Complete with proper infrastructure and amenities for athletes and spectators.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
    features: [
      "Main Ground",
      "Sports Arena",
      "Spectator Areas",
      "Changing Rooms",
    ],
  },
];

const venueSpaces = [
  {
    id: 1,
    name: "Main Ground",
    capacity: "1000+ Guests",
    type: "Outdoor",
    description:
      "Expansive outdoor venue perfect for large gatherings, sports events, and grand celebrations.",
    image:
      "/images/amenities/2_main_ground.JPG",
    idealFor: ["Weddings", "Sports", "Large Parties", "Outdoor Events"],
  },
  {
    id: 2,
    name: "Conference Hall",
    capacity: "200 Guests",
    type: "Indoor",
    description:
      "Modern conference facility equipped with latest A/V technology and flexible seating arrangements.",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    idealFor: ["Corporate Meetings", "Seminars", "Training", "Presentations"],
  },
  {
    id: 3,
    name: "Front Lawn",
    capacity: "300 Guests",
    type: "Outdoor",
    description:
      "Picturesque outdoor setting with lush greenery, perfect for intimate ceremonies and gatherings.",
    image:
      "/images/amenities/3_front_lawn.JPG",
    idealFor: [
      "Garden Weddings",
      "Receptions",
      "Outdoor Parties",
      "Ceremonies",
    ],
  },
  {
    id: 4,
    name: "Main Lobby",
    capacity: "500 Guests",
    type: "Indoor",
    description:
      "Grand entrance hall with elegant ambiance, suitable for cocktail parties and social gatherings.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    idealFor: [
      "Cocktail Events",
      "Networking",
      "Receptions",
      "Social Gatherings",
    ],
  },
];

const services = [
  {
    id: 1,
    icon: "🍽️",
    title: "Catering Services",
    description:
      "Customized menu options with multi-cuisine choices prepared by expert chefs",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Event Decoration",
    description:
      "Professional decoration services to match your theme and vision",
  },
  {
    id: 3,
    icon: "📸",
    title: "Photography & Video",
    description:
      "Capture every moment with professional photography and videography",
  },
  {
    id: 4,
    icon: "🎵",
    title: "Entertainment",
    description:
      "Live music, DJ services, and entertainment options for your guests",
  },
  {
    id: 5,
    icon: "🚗",
    title: "Valet Parking",
    description: "Convenient valet parking services for your guests",
  },
  {
    id: 6,
    icon: "👔",
    title: "Event Coordination",
    description: "Dedicated event manager to ensure seamless execution",
  },
];

export default function EventsPage() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/dji.jpeg"
            alt="Events"
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
              HOST YOUR
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Perfect Event
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Weddings, Corporate Events & Celebrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
              Events We <span style={{ color: "#e2b714" }}>Specialize In</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Daman Club is your premier destination for hosting memorable
                events. With versatile venues, professional event management,
                and comprehensive facilities, we cater to weddings, corporate
                events, social celebrations, and sports tournaments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our three-acre property offers both indoor and outdoor spaces,
                accommodating events from intimate gatherings to grand
                celebrations with over 1000 guests. Every event is backed by our
                experienced team and world-class amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              WHAT WE CATER
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Event <span style={{ color: "#e2b714" }}>Categories</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-96">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-serif font-bold mb-2">
                      {event.name}
                    </h3>
                    <p className="text-lg text-gray-200 mb-4">
                      {event.tagline}
                    </p>
                    <p className="text-sm text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {event.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2 text-[#e2b714]"
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
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Spaces */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              OUR VENUES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Event <span style={{ color: "#e2b714" }}>Spaces</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Versatile venues for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venueSpaces.map((venue, index) => (
              <motion.div
                key={venue.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#e2b714] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {venue.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-[#e2b714] font-semibold mb-4">
                    {venue.capacity}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {venue.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Ideal For:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {venue.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              COMPREHENSIVE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Event <span style={{ color: "#e2b714" }}>Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need for a successful event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e2b714] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Plan Your Event Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you create an unforgettable experience. Contact our
              event planning team to discuss your requirements and get a
              customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  router.push("/demo/membership");
                }}
                className="px-8 py-4 bg-[#e2b714] hover:bg-[#c19910] text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Book Event
              </button>
              <button
                onClick={() => {
                  router.push("/demo/contact");
                }}
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                1000+
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Guest Capacity
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
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Acres Property
              </h4>
              <p className="text-sm text-gray-600">Spacious Venue</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Event Spaces</h4>
              <p className="text-sm text-gray-600">Indoor & Outdoor</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                24/7
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Event Support
              </h4>
              <p className="text-sm text-gray-600">Dedicated Team</p>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
