"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DemoHeader from "@/components/demo-header";
import { useRouter } from "next/navigation";
import DemoFooter from "@/components/demo-footer";

const luxuryRooms = [
  {
    id: 1,
    name: "Premium Hotel Rooms",
    description:
      "Luxurious accommodations with modern amenities, perfect for tourists and business travelers seeking comfort and elegance",
    image:
      "/images/2_premium_hotel_rooms.JPG",
    size: "World-Class",
    price: "Stay",
  },
  {
    id: 2,
    name: "Swimming Pool",
    description:
      "Experience our stunning outdoor swimming pool with kids pool area, perfect for unwinding and family fun",
    image:
      "/images/3_swimming_pool.JPG",
    size: "Outdoor & Kids",
    price: "Pool",
  },
  {
    id: 3,
    name: "Gaming Area",
    description:
      "State-of-the-art gaming zone featuring Snooker, Air Hockey, Foosball, Billiards, Chess, and Carrom for endless entertainment",
    image:
      "/images/4_gaming_area.JPG",
    size: "Multiple Games",
    price: "Games",
  },
  {
    id: 4,
    name: "Fine Dine Restaurant",
    description:
      "Exquisite dining experience with gourmet cuisine, perfect for romantic dinners, family gatherings, and special celebrations",
    image:
      "/images/5_fine_dine_restaurant.JPG",
    size: "Premium",
    price: "Dining",
  },
];

const experiences = [
  {
    id: 1,
    icon: "�",
    title: "Bespoke Celebrations",
    description:
      "Tailored experiences that transform milestones into unforgettable memories.",
  },
  {
    id: 2,
    icon: "🧘",
    title: "Curated Social Experiences",
    description:
      "Opportunities to connect, network, and celebrate in a distinguished setting.",
  },
  {
    id: 3,
    icon: "👨‍👩‍👧‍👦",
    title: "Wellness & Vitality",
    description:
      "Spaces and programs designed to refresh, energize, and rejuvenate mind and body.",
  },
  {
    id: 4,
    icon: "💼",
    title: "Exclusive Membership Privileges",
    description:
      "Access to thoughtfully crafted benefits that elevate every visit.",
  },
  {
    id: 5,
    icon: "🏊",
    title: "Cultural & Artistic Journeys",
    description:
      "Engaging performances, exhibits, and curated events that inspire and captivate.",
  },
  {
    id: 6,
    icon: "✨",
    title: "Signature Hospitality",
    description:
      "Impeccable service and attention to detail that make every moment effortless",
  },
];

const destinations = [
  {
    id: 1,
    city: "Signature Weddings",
    tagline:
      "Bespoke celebrations crafted for unforgettable elegance and grandeur.",
    image:
      "/images/6_signature_wedding.jpg",
  },
  {
    id: 2,
    city: "Corporate Retreats & Conferences",
    tagline:
      "Exclusive spaces for focused meetings and high-level engagements.",
    image:
      "/images/7_corporate_retreats.jpg",
  },
  {
    id: 3,
    city: "Private Celebrations & Social Gatherings",
    tagline:
      "Memorable moments curated for intimate and grand occasions alike.",
    image:
      "/images/8_private_celebrations.jpg",
  },
  {
    id: 4,
    city: "Cultural & Artistic Events",
    tagline:
      "Captivating performances and curated showcases for discerning audiences.",
    image:
      "/images/9_cultural_artistic_events.jpg",
  },
];

export default function LeelaDemo() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <DemoHeader />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        
        <div className="absolute inset-0">
          <video
            src="/video/background.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        {/* <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
            alt="Luxury Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div> */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl md:text-2xl mb-4 font-light tracking-widest">
              DIVE INTO ULTIMATE LUXURY AT
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
              THE DAMAN CLUB
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Premium Hotel | Weddings | Corporate Events | Tourist Paradise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  router.push("/membership");
                }}
                className="bg-[#e2b714] hover:bg-[#c19910] text-white px-10 py-4 rounded-md text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
              >
                BECOME A MEMBER
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              PREMIUM HOSPITALITY
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              The Daman Club
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Daman Club is a distinguished destination where elegance and
                refinement define every experience. Set against the captivating
                backdrop of Daman, it offers an elevated retreat for those who
                seek extraordinary moments—whether a celebrated gathering, a
                curated escape, or an immersive experience in sophistication.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every aspect of the club reflects meticulous attention, timeless
                design, and a commitment to creating signature experiences that
                linger long after departure. Here, luxury is not declared—it is
                felt, in every detail, every encounter, and every memory.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">�</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                The Art of Gathering
              </h3>
              <p className="text-gray-600">
                From intimate rendezvous to grand celebrations, the club
                transforms gatherings into experiences that are remembered.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Crafted for Connoisseurs
              </h3>
              <p className="text-gray-600">
                Every detail, every interaction, every space is curated for
                those who value elegance and sophistication without compromise.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Timeless Retreat
              </h3>
              <p className="text-gray-600">
                An environment that balances serenity and style, offering
                members a sense of ease and privilege at every turn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              OUR FACILITIES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At The Daman Club, every moment is designed to delight. From the
              vibrant Modern Kids Play Room and elegantly appointed Rooms for
              Stay to the immersive Theatre and signature Fine Dine Restaurant,
              our amenities come together to offer experiences that are
              sophisticated, effortless, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryRooms.map((room) => (
              <motion.div
                key={room.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#e2b714] hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-80">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#e2b714] text-white px-4 py-2 rounded-md font-semibold">
                    {room.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#e2b714] font-semibold">
                      📏 {room.size}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              A World of Possibilities
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              The Ultimate Destination Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From thoughtfully designed accommodations to exceptional spaces
              for leisure, celebrations, and gatherings, The Daman Club delivers
              an elevated experience tailored for every visitor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              CULINARY EXCELLENCE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Kalamari
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A signature dining destination where flavour, finesse, and
              atmosphere come together for an elevated culinary experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Distinctive Cuisine",
                cuisine: "Thoughtfully crafted dishes that celebrate balance, depth, and character.",
                image:
                  "/images/10_distinctive_cuisine.JPG",
              },
              {
                id: 2,
                name: "Refined Setting",
                cuisine: "An elegant space designed for relaxed evenings, meaningful conversations, and memorable meals.",
                image:
                  "/images/11_refined_setting.JPG",
              },
              {
                id: 3,
                name: "Dining, Elevated",
                cuisine: "Impeccable service and attention to detail that turn every visit into an experience.",
                image:
                  "/images/12_dining_elevated.JPG",
              },
            ].map((restaurant) => (
              <div
                key={restaurant.id}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-120">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {restaurant.name}
                    </h3>
                    <p className="text-lg text-gray-200">
                      {restaurant.cuisine}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              WHAT WE CATER
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Moments That Define Distinction
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From grand celebrations to intimate gatherings, every event at The
              Daman Club is designed to inspire, impress, and leave a lasting
              impression. Here, experiences are elevated, memorable, and
              unmistakably refined.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <motion.div
                key={dest.id}
                whileHover={{ y: -10 }}
                className="relative h-96 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image
                  src={dest.image}
                  alt={dest.city}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{dest.city}</h3>
                  <p className="text-lg text-gray-200">{dest.tagline}</p>
                  <button
                    onClick={() => {
                      router.push("/events");
                    }}
                    className="mt-4 text-white border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#e2b714]! transition-colors w-fit"
                  >
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-[#e2b714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-widest mb-4">
              Reserve Your Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Where Every Occasion Shines
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether it’s a luxurious getaway, a milestone celebration, or a
              high-profile gathering, The Daman Club provides exceptional spaces
              and thoughtfully designed experiences to make every moment
              remarkable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  router.push("/amenities");
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-500! px-10 py-4 rounded-md text-lg font-semibold"
              >
                BOOK YOUR STAY
              </button>
              <button
                onClick={() => {
                  router.push("/events");
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-500! px-10 py-4 rounded-md text-lg font-semibold"
              >
                PLAN YOUR EVENT
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <DemoFooter />
    </div>
  );
}
