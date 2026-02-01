"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";

const cuisines = [
  {
    id: 1,
    name: "Indian Cuisine",
    description:
      "Authentic flavors from across India, featuring traditional recipes passed down through generations",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    specialties: ["Tandoori", "Curries", "Biryanis", "Thalis"],
  },
  {
    id: 2,
    name: "Continental",
    description:
      "European delights prepared with the finest ingredients and modern culinary techniques",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    specialties: ["Steaks", "Pasta", "Soups", "Salads"],
  },
  {
    id: 3,
    name: "Chinese",
    description:
      "Exquisite oriental dishes that bring the taste of Asia to your table",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80",
    specialties: ["Dim Sum", "Noodles", "Stir Fry", "Soups"],
  },
];

const diningExperiences = [
  {
    id: 1,
    title: "Fine Dining Restaurant",
    icon: "🍽️",
    description:
      "Experience culinary excellence in our elegant dining hall with an extensive menu featuring international and local cuisines. Perfect for romantic dinners and special celebrations.",
    features: [
      "Multi-Cuisine",
      "Air Conditioned",
      "Live Music",
      "Premium Ambiance",
    ],
  },
  {
    id: 2,
    title: "Poolside Cafe",
    icon: "☕",
    description:
      "Relax by the pool with light refreshments, snacks, and beverages. Enjoy the perfect blend of leisure and taste in a serene outdoor setting.",
    features: ["Outdoor Seating", "Quick Bites", "Beverages", "Scenic View"],
  },
  {
    id: 3,
    title: "Banquet Dining",
    icon: "🎉",
    description:
      "Host grand celebrations with our banquet dining services. Customized menus for weddings, corporate events, and large gatherings with impeccable service.",
    features: [
      "Custom Menus",
      "Large Capacity",
      "Event Catering",
      "Professional Service",
    ],
  },
  {
    id: 4,
    title: "Private Dining",
    icon: "👥",
    description:
      "Intimate dining experiences in exclusive private rooms. Perfect for business meetings, family gatherings, or special occasions requiring privacy and personalized attention.",
    features: [
      "Private Rooms",
      "Personalized Service",
      "Custom Setup",
      "Exclusive Ambiance",
    ],
  },
];

const menuHighlights = [
  {
    id: 1,
    category: "Starters",
    items: [
      "Tandoori Platter",
      "Crispy Spring Rolls",
      "Paneer Tikka",
      "Chicken Wings",
    ],
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  },
  {
    id: 2,
    category: "Main Course",
    items: [
      "Butter Chicken",
      "Vegetable Biryani",
      "Grilled Fish",
      "Pasta Alfredo",
    ],
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    id: 3,
    category: "Desserts",
    items: [
      "Gulab Jamun",
      "Chocolate Lava Cake",
      "Tiramisu",
      "Ice Cream Sundae",
    ],
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
];

export default function RestaurantPage() {
  return (
    <div className="bg-white text-gray-900">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurent.jpeg"
            alt="Fine Dine Restaurant"
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
              CULINARY EXCELLENCE
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Fine Dine Restaurant
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              A Symphony of Flavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
              Kalamari{" "}
              <span style={{ color: "#e2b714" }}>— Signature Dining</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Step into Kalamari, our distinguished dining destination where
                culinary artistry meets refined ambience. Celebrated for its
                exceptional service and captivating atmosphere, Kalamari invites
                you to savour thoughtfully curated flavours that resonate long
                after the last course.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From memorable dinners and intimate evenings to casual culinary
                experiences with friends, the restaurant blends contemporary
                sensibilities with classic touches. Patrons praise its
                sophisticated yet vibrant setting — perfect for a range of
                moments, whether it’s a special night out or a leisurely meal
                with company.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Kalamari, every dish is crafted with attention and flair,
                reflecting the chef’s creativity and commitment to quality —
                complemented by attentive service that enhances your experience
                with seamless hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisines Section */}
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
              MULTI-CUISINE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Our <span style={{ color: "#e2b714" }}>Specialties</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore diverse flavors from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine, index) => (
              <motion.div
                key={cuisine.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image
                    src={cuisine.image}
                    alt={cuisine.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {cuisine.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {cuisine.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.specialties.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#e2b714]/10 text-[#e2b714] rounded-full text-sm font-medium"
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

      {/* Dining Experiences */}
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
              DINING OPTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Dining <span style={{ color: "#e2b714" }}>Experiences</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect setting for your culinary journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{experience.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {experience.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {experience.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
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
              MENU HIGHLIGHTS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Popular <span style={{ color: "#e2b714" }}>Dishes</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Savor our chef&apos;s recommended selections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((menu, index) => (
              <motion.div
                key={menu.id}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-96">
                  <Image
                    src={menu.image}
                    alt={menu.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      {menu.category}
                    </h3>
                    <ul className="space-y-2">
                      {menu.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-2 h-2 rounded-full bg-[#e2b714] mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              Reserve Your Table Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience culinary excellence at The Daman Club&apos;s Fine Dine
              Restaurant. Book your table for an unforgettable dining
              experience.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#e2b714] px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                Book a Table
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#e2b714] px-10 py-4 rounded-md text-lg font-semibold transition-colors">
                View Full Menu
              </button>
            </div> */}
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Chefs</h4>
              <p className="text-sm text-gray-600">Master Culinary Artists</p>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Fresh Ingredients
              </h4>
              <p className="text-sm text-gray-600">Quality Guaranteed</p>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Timely Service
              </h4>
              <p className="text-sm text-gray-600">Quick & Efficient</p>
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
                Premium Ambiance
              </h4>
              <p className="text-sm text-gray-600">Elegant Atmosphere</p>
            </motion.div>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
