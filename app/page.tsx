"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Carousel } from "antd";
import Navigation from "@/components/navigation";

const facilities = [
  {
    name: "New Booking System 1",
    description:
      "Streamlined online booking system for hassle-free reservations. Book your slots anytime, anywhere with our user-friendly interface.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
  },
  {
    name: "Membership Plans 2",
    description:
      "Flexible membership options tailored to your needs. Choose from various plans with exclusive benefits and privileges.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
  {
    name: "Training Programs 3",
    description:
      "Professional coaching and training programs for all skill levels. Improve your game with expert guidance.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
  },
  {
    name: "Event Hosting 4",
    description:
      "Host your special events in our premium venues. Perfect for corporate events, celebrations, and social gatherings.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  },
  {
    name: "Pro Shop 5",
    description:
      "Premium equipment and apparel from top brands. Get everything you need for your perfect game.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  },
  {
    name: "Professional Lessons 6",
    description:
      "One-on-one coaching with certified professionals. Personalized instruction to help you reach your goals.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
  },
  {
    name: "Clubhouse Dining 7",
    description:
      "Fine dining experience with panoramic views. Enjoy gourmet cuisine and refreshing beverages in elegant settings.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    name: "Tournament Hosting 8",
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
    id: 2,
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    span: { row: 1, col: 2 },
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    span: { row: 1, col: 2 },
  },

  {
    id: 11,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    span: { row: 2, col: 1 },
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    span: { row: 1, col: 1 },
  },
];

function PinterestGallery() {
  return (
    <div className="max-w-6xl mx-auto relative">
      <Carousel
        autoplay
        autoplaySpeed={4000}
        dots={true}
        arrows={false}
        dotPlacement="bottom"
        slidesToShow={3}
        slidesToScroll={1}
        infinite={true}
        draggable={true}
        swipe={true}
        swipeToSlide={true}
        touchMove={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              draggable: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              draggable: true,
            },
          },
        ]}
      >
        {galleryImages.map((image) => (
          <div key={image.id} className="px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-100 rounded-2xl overflow-hidden shadow-lg group cursor-grab active:cursor-grabbing"
            >
              <Image
                src={image.url}
                alt={`Gallery image ${image.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a5946]/95 via-[#1a5946]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#ad8b3a" }}
                  >
                    Daman Club Moment
                  </h3>
                  <p className="text-sm" style={{ color: "#f5f5f5" }}>
                    Captured excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <style jsx global>{`
        .slick-dots {
          bottom: -40px !important;
        }
        .slick-dots li button {
          background: #ad8b3a !important;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .slick-dots li.slick-active button {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
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
          <h6 className="text-xl md:text-2xl mb-4 text-gray-600">Dive into Ultimate Luxury at</h6>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            The <span style={{ color: "#ad8b3a" }}>Daman Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Daman&apos;s first members-only club; spread across three acres of land in the heart of the City, this luxurious Club is an ideal getaway from all the hustle and bustle of city Life. Surround yourself with cool sea breezes, astounding views on walkable distance and sublime services that add a golden touch to your business or leisure experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              BECOME A MEMBER
            </button>
            <button className="border-2 border-[#ad8b3a] text-[#ad8b3a] hover:bg-[#ad8b3a]/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              An Escape from <span style={{ color: "#ad8b3a" }}>Reality</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Experience our outdoor swimming pool to unwind yourself from the stress of
                everyday life. Watch your Kids have a fantastic time in our kids pool while you relax
                and get served at our poolside area.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: "#ad8b3a" }}>
                🏊
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Swimming Pool
              </h3>
              <p className="text-gray-600">
                Experience our outdoor swimming pool to unwind yourself from the stress of everyday life.
              </p>
            </div>
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: "#ad8b3a" }}>
                🎪
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Event Venue
              </h3>
              <p className="text-gray-600">
                Magnificent experience for you and your guests with both indoor and outdoor event spaces.
              </p>
            </div>
            <div className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all">
              <div className="text-5xl mb-4" style={{ color: "#ad8b3a" }}>
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Luxury Privileges
              </h3>
              <p className="text-gray-600">
                Every corner with a Luxury Touch. Setting new standards of Luxury and Exclusive Lifestyle in Daman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxurious Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Luxurious <span style={{ color: "#ad8b3a" }}>Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Every corner with a Luxury Touch
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              By setting new standards of Luxury and Exclusive Lifestyle in Daman, we offer
              the audience of this beautiful city an unwinding and exclusive venue to settle
              down for a stress-free Journey!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "#ad8b3a" }}
              >
                Game Zone
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "#ad8b3a" }}
              >
                Restaurant
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛏️</div>
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "#ad8b3a" }}
              >
                Rooms
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎭</div>
              <div
                className="text-xl font-bold mb-2"
                style={{ color: "#ad8b3a" }}
              >
                Theater
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section id="events" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Membership <span style={{ color: "#ad8b3a" }}>Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Well, as Exclusive as the Club is, the members are also from an Exclusive Class!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                icon: "🏨",
                title: "World-class Stay Benefits",
                description:
                  "Our spacious and well-appointed rooms are the perfect place to relax and recharge, with all the modern amenities and attentive service you need to feel pampered.",
              },
              {
                id: 2,
                icon: "🧘",
                title: "Body, Mind and Soul",
                description:
                  "We take privilege to offer you health centric amenities to give you a Luxurious Serene experience. With a gym facility, Yoga, and Meditation, one can achieve the perfect symphony of relaxation and peace from within.",
              },
              {
                id: 3,
                icon: "👨‍👩‍👧‍👦",
                title: "Family Fun Zone",
                description:
                  "The Daman Club offers you unforgettable moments with your loved ones and gives everyone a magical experience for one and all. We offer games of Snooker, Air Hockey, Foosball Table, Billiard, Chess, and Carrom to bond over games.",
              },
              {
                id: 4,
                icon: "💼",
                title: "Corporate Arrangements",
                description:
                  "Our uptown A/V Room, which provides everything a corporate is searching for, will help you start your business gatherings, presentations, training sessions, or interviews with panache.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-[#ad8b3a]/20 rounded-2xl p-8 hover:border-[#ad8b3a] hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#ad8b3a" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Venue Section */}
      <section id="facilities" className="py-20 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ideal Venue For{" "}
              <span style={{ color: "#ad8b3a" }}>Any Event</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our club provides both indoor and outdoor event spaces, resulting in a
              magnificent experience for you and your guests. With everything conveniently located
              under one roof, you and guests can simply access their accommodations, the swimming
              pool, the game zone, the sports area, the magical event venue, and the
              delectable cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                icon: "💒",
                title: "Weddings",
                description:
                  "Celebrate your love story in style at The Daman Club, with our elegant Lawn, stunning views, and attentive staff.",
              },
              {
                id: 2,
                icon: "🎉",
                title: "Parties",
                description:
                  "Host an unforgettable party for your loved ones at The Daman Club, with our spacious event spaces, delicious food and drinks, and lively atmosphere.",
              },
              {
                id: 3,
                icon: "💼",
                title: "Conference",
                description:
                  "Bring your team together for a productive and successful conference at The Daman Club, with our state-of-the-art facilities, comfortable accommodations, and experienced event planners.",
              },
            ].map((event) => (
              <div
                key={event.id}
                className="bg-white p-8 rounded-xl hover:bg-[#ad8b3a]/5 border-2 border-[#ad8b3a]/30 hover:border-[#ad8b3a] transition-all cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
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
              <span style={{ color: "#ad8b3a" }}>Daman Club</span>
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
            Your search for True Luxury{" "}
            <span style={{ color: "#ad8b3a" }}>ends here</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re looking for a relaxing getaway, a romantic rendezvous, or a
            luxurious event space, The Daman Club is the perfect place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              BOOK NOW
            </button>
            <button className="border-2 border-[#ad8b3a] text-[#ad8b3a] hover:bg-[#ad8b3a]/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              MEMBER LOGIN
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white border-t-2 border-[#ad8b3a]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The <span style={{ color: "#ad8b3a" }}>Daman Club</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Opp Tourism Department, Bandodkar Sports Complex,
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Near Daman Bus Stand, Daman - 396210.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#ad8b3a" }}
              >
                Phone
              </h3>
              <p className="text-gray-700 font-medium">+91-9311303001</p>
              <p className="text-gray-500 text-sm mt-1">(Booking Issues)</p>
              <p className="text-gray-700 font-medium mt-2">011-20861731</p>
              <p className="text-gray-500 text-sm mt-1">(Other Queries)</p>
            </div>
            <div className="text-center">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#ad8b3a" }}
              >
                Email
              </h3>
              <p className="text-gray-700 font-medium">support@damanclub.in</p>
            </div>
            <div className="text-center">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#ad8b3a" }}
              >
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
            <p>Copyright © The Daman Club</p>
            <p className="mt-2 text-sm">Powered by Smart Technologies</p>
          </div>
        </div>
      </section>
    </div>
  );
}
