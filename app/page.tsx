"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/navigation";

const facilities = [
  {
    name: "New Booking System",
    description:
      "Streamlined online booking system for hassle-free reservations. Book your slots anytime, anywhere with our user-friendly interface.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
  },
  {
    name: "Membership Plans",
    description:
      "Flexible membership options tailored to your needs. Choose from various plans with exclusive benefits and privileges.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
  {
    name: "Training Programs",
    description:
      "Professional coaching and training programs for all skill levels. Improve your game with expert guidance.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
  },
  {
    name: "Event Hosting",
    description:
      "Host your special events in our premium venues. Perfect for corporate events, celebrations, and social gatherings.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  },
  {
    name: "Pro Shop",
    description:
      "Premium equipment and apparel from top brands. Get everything you need for your perfect game.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  },
  {
    name: "Professional Lessons",
    description:
      "One-on-one coaching with certified professionals. Personalized instruction to help you reach your goals.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
  },
  {
    name: "Clubhouse Dining",
    description:
      "Fine dining experience with panoramic views. Enjoy gourmet cuisine and refreshing beverages in elegant settings.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    name: "Tournament Hosting",
    description:
      "World-class facilities for hosting tournaments and competitions. Complete event management support available.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
  },
];

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    span: { row: 1, col: 2 },
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    span: { row: 1, col: 2 },
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
];

function PinterestGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-4 auto-rows-[200px] gap-4">
      {galleryImages.map((image) => {
        const isHovered = hoveredId === image.id;
        const rowSpan = isHovered ? image.span.row + 1 : image.span.row;
        const colSpan = isHovered ? image.span.col + 1 : image.span.col;

        return (
          <motion.div
            key={image.id}
            layout
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              gridRow: `span ${rowSpan}`,
              gridColumn: `span ${colSpan}`,
            }}
            transition={{
              layout: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <motion.img
              src={image.url}
              alt={`Gallery image ${image.id}`}
              className="w-full h-full object-cover"
              // layout="fill"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-end p-6"
              style={{
                background: isHovered ? 'linear-gradient(to top, rgba(26, 89, 70, 0.95), rgba(26, 89, 70, 0.6), transparent)' : 'transparent'
              }}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1" style={{ color: '#ad8b3a' }}>Daman Club Moment</h3>
                <p className="text-sm" style={{ color: '#f5f5f5' }}>Captured excellence</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null);

  return (
    <div className="bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 bg-gray-50"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Experience Excellence at{" "}
            <span style={{ color: '#ad8b3a' }}>Daman&apos;s Premier Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A perfect blend of luxury, sport, and scenic beauty offering an
            unforgettable experience for members of all levels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Book Your Visit
            </button>
            <button className="border-2 border-[#ad8b3a] text-[#ad8b3a] hover:bg-[#ad8b3a]/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About the <span style={{ color: '#ad8b3a' }}>Club</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nestled in the heart of Daman, our premier club offers a perfect
                blend of history, sport, and scenic beauty. Set against iconic
                landscapes, the lush grounds provide a unique and memorable
                experience for members of all levels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A symbol of inclusivity and excellence, our facilities combine
                modern amenities with timeless charm. Our strategic layout
                welcomes seasoned enthusiasts while embracing beginners alike.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: '#ad8b3a' }}>🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Inclusivity for All</h3>
              <p className="text-gray-600">
                Experience premier facilities, welcoming members of all skill
                levels to embrace excellence.
              </p>
            </div>
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: '#ad8b3a' }}>🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">On-Ground Concierge</h3>
              <p className="text-gray-600">
                Seamless assistance with our dedicated concierge, ensuring a
                hassle-free experience.
              </p>
            </div>
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: '#ad8b3a' }}>⭐</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                World-Class Facilities
              </h3>
              <p className="text-gray-600">
                Discover premium amenities, including modern clubhouse, practice
                areas, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#ad8b3a' }}>
                100+
              </div>
              <div className="text-gray-600 text-lg font-medium">Events Done</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#ad8b3a' }}>
                18
              </div>
              <div className="text-gray-600 text-lg font-medium">Premium Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#ad8b3a' }}>
                50+
              </div>
              <div className="text-gray-600 text-lg font-medium">Training Programs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#ad8b3a' }}>
                25+
              </div>
              <div className="text-gray-600 text-lg font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="events" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              News & <span style={{ color: '#ad8b3a' }}>Events</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay on course with the latest updates and events at Daman Club,
              where every moment is crafted for enthusiasts alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white border-2 border-[#1a5946]/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl transition-all"
              >
                <div className="h-48 bg-[#1a5946]"></div>
                <div className="p-6">
                  <div className="text-sm mb-2 font-semibold" style={{ color: '#ad8b3a' }}>
                    December {10 + item}, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Major Facility Upgrade Announcement
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience our enhanced facilities with state-of-the-art
                    amenities and modern infrastructure...
                  </p>
                  <button className="font-semibold hover:opacity-80" style={{ color: '#ad8b3a' }}>
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Discover Our Premium{" "}
              <span style={{ color: '#ad8b3a' }}>Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From professional coaching to top-tier facilities, we offer a
              range of services designed to enhance your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:bg-[#ad8b3a]/5 border-2 border-[#ad8b3a]/30 hover:border-[#ad8b3a] transition-all cursor-pointer relative shadow-sm hover:shadow-xl"
                onMouseEnter={() => setHoveredFacility(index)}
                onMouseLeave={() => setHoveredFacility(null)}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-900">{facility.name}</h3>
                <p className="text-gray-600">Premium services available</p>

                <AnimatePresence>
                  {hoveredFacility === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-4 w-80 bg-white border-2 border-[#ad8b3a] rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={facility.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold mb-2" style={{ color: '#ad8b3a' }}>
                          {facility.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Highlights from{" "}
              <span style={{ color: '#ad8b3a' }}>Daman Club</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us as we highlight memorable moments and stunning landscapes,
              reflecting the passion and dedication of our community.
            </p>
          </div>

          <PinterestGallery />
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Follow Us On <span style={{ color: '#ad8b3a' }}>Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay connected with our latest updates and community moments
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
            Follow on Instagram
          </button>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section id="contact" className="py-20 bg-white border-t-2 border-[#ad8b3a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to <span style={{ color: '#ad8b3a' }}>Join Us?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become a member today and enjoy exclusive benefits, access to
              events, and a community that celebrates excellence.
            </p>
            <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Book Your Visit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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

          <div className="border-t border-[#ad8b3a]/30 mt-16 pt-8 text-center text-gray-500">
            <p>Copyright © 2025 - Daman Club. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
