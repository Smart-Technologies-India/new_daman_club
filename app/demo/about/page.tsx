"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";
import { useRouter } from "next/navigation";

const facilities = [
  {
    id: 1,
    title: "Sports and Fitness",
    icon: "⚽",
    description:
      "Enjoy the Thrill with Adrenaline-pumping activities of your choice at our Sports Facility. Play like a Pro and enjoy your favourite sport with passion. Experience the joy of playfulness right here in Daman.",
    features: [
      "Badminton Court",
      "Jogging Track",
      "Net Cricket",
      "Sports Arena",
    ],
  },
  {
    id: 2,
    title: "Body, Mind and Soul",
    icon: "🧘",
    description:
      "As important Member you are, so is your Health to us. We take privilege to offer you health centric amenities to give you a luxurious Serene experience.",
    features: ["Gym Facility", "Yoga", "Meditation", "Wellness Programs"],
  },
  {
    id: 3,
    title: "Entertainment",
    icon: "🎮",
    description:
      "The Daman Club offers you unforgettable moments with your loved ones and gives everyone a magical experience for one and all. We believe this place is your one-stop destination to spend time with your family and friends.",
    features: [
      "Snooker",
      "Air Hockey",
      "Foosball Table",
      "Billiard",
      "Chess",
      "Carrom",
    ],
  },
  {
    id: 4,
    title: "Lights, Camera, Action!",
    icon: "🎬",
    description:
      "Make yourself at home and enjoy a whimsical movie experience in our private theatre area. For a brief staycation or for business purposes, our accommodation services are the ideal choice.",
    features: [
      "Private Theatre",
      "4 Keys Accommodation",
      "Event Space for 1000+",
      "Weddings & Conferences",
    ],
  },
];

const experiences = [
  { name: "Swimming Pool", icon: "🏊", link: "#" },
  { name: "Sports Facilities", icon: "🏃", link: "#" },
  { name: "Huge Lobby", icon: "🏛️", link: "#" },
  { name: "Theater Room", icon: "🎭", link: "#" },
  { name: "Conference Hall", icon: "💼", link: "#" },
  { name: "Main Ground", icon: "🌳", link: "#" },
  { name: "Kids Play Area", icon: "🎪", link: "#" },
  { name: "Game Zone", icon: "🎯", link: "#" },
  { name: "Accommodation", icon: "🛏️", link: "#" },
  { name: "Front Lawn", icon: "🌺", link: "#" },
];

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/1_main.jpeg"
            alt="The Daman Club"
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
              AT YOUR SERVICE
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              World Class Facilities
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Enjoy the Premium Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-gray-900">
              About <span style={{ color: "#e2b714" }}>The Daman Club</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The contemporary boutique style Club is a first luxury club in
                Daman with world-class rooms along with other modern amenities
                like themed restaurants, swimming pool, fitness activities,
                sports arena, theatre room and much more. An eclectic sanctuary
                that offers its diverse members the space to express themselves
                freely and authentically.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As the Club is located in the middle of the City, the
                city&apos;s shopping hub, beaches and sea face roads are all
                located within close proximity; as is a flourishing heritage
                precinct with must visit churches & forts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Daman Club takes pride in delivering prompt and friendly service
                at every point of contact.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                3
              </div>
              <div className="text-gray-600 font-medium">Acres of Land</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                1000+
              </div>
              <div className="text-gray-600 font-medium">Event Capacity</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                10+
              </div>
              <div className="text-gray-600 font-medium">
                Premium Facilities
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                #1
              </div>
              <div className="text-gray-600 font-medium">
                Luxury Club in Daman
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Daman&apos;s first members-only club; spread across three acres of
              land in the heart of the City, this luxurious Club is an ideal
              getaway from all the hustle and bustle of city life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={
                      facility.id === 1
                        ? "/images/2_sports_and_ fitness.JPG"
                        : facility.id === 2
                        ? "/images/3_body_mind.JPG"
                        : facility.id === 3
                        ? "/images/4_entertainment.JPG"
                        : "/images/5_lights_camera.JPG"
                    }
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#e2b714] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <span className="text-[#e2b714]">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              EXPLORE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Surround yourself with cool sea breezes, astounding views on
              walkable distance and sublime services that add a golden touch to
              your business or leisure experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {experiences.map((exp, index) => (
              <motion.a
                key={index}
                href={exp.link}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-[#e2b714] hover:text-white transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3">{exp.icon}</div>
                <h3 className="text-center font-semibold text-sm group-hover:text-white">
                  {exp.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 bg-[#e2b714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Daman&apos;s Most Magnificent Venue
            </h3>
            <p className="text-lg mb-2">
              Perfect outdoor site for Weddings, Gatherings, Exhibitions, and
              Summits
            </p>
            <p className="text-xl font-semibold">
              Capacity: Over 1000 People
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join The Daman Club and enjoy world-class facilities and premium
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                router.push("/demo/membership");
              }}
              className="bg-[#e2b714] hover:bg-[#c19910] text-white px-10 py-4 rounded-md text-lg font-semibold transition-colors shadow-xl"
            >
              BECOME A MEMBER
            </button>
            <Link
              href="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-md text-lg font-semibold transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <DemoFooter />
    </div>
  );
}
