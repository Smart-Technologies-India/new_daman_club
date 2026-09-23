"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "antd";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";
import { useRouter } from "next/navigation";

const swimmingPoolSection = {
  title: "SWIMMING POOL",
  tagline: "Refresh. Relax. Repeat.",
  description:
    "Immerse yourself in the Refreshing Swimming Pool Oasis, where clear waters and a serene atmosphere create the perfect aquatic retreat for leisurely dips, invigorating laps, or family fun.",
  detailedDescription:
    "Dive into relaxation at The Daman Club's Refreshing Swimming Pool Oasis. Our pristine pool beckons, providing a refreshing escape for swimmers of all ages. Whether you're seeking a leisurely dip, invigorating laps, or a place for family fun, our pool is the perfect aquatic retreat. Bask in the sun, enjoy the clear waters, and create unforgettable moments in a setting that combines luxury with leisure.",
  image:
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80",
};

const sportsFacilities = [
  {
    id: 1,
    title: "Billiards Lounge",
    icon: "🎱",
    description:
      "Indulge in refined entertainment at The Daman Club's Billiards Lounge. Our carefully crafted billiards tables provide the perfect setting for friendly competition and camaraderie.",
    image: "/images/facilites/2_billiards_lounge.jpg",
  },
  {
    id: 2,
    title: "Archery",
    icon: "🏹",
    description:
      "Unleash your inner archer at The Daman Club's Archery Adventure Zone. Step onto our archery range, where precision meets excitement. Whether you're a novice exploring a new hobby or a skilled archer honing your accuracy, our facilities cater to all levels. Immerse yourself in the thrill of archery, surrounded by a safe and welcoming environment that combines skill development with pure enjoyment.",
    image: "/images/facilites/3_archery.jpg",
  },
  {
    id: 3,
    title: "Jogging Track",
    icon: "🏃‍♂️",
    description:
      "Stay active and enjoy the scenic surroundings on The Daman Club's Jogging Track. Our well-maintained track offers a safe and invigorating environment for joggers of all levels. Whether you're looking for a morning run, an evening jog, or a leisurely stroll, our track provides the perfect setting to enhance your fitness and well-being.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80",
  },
  {
    id: 4,
    title: "Net Cricket",
    icon: "🏏",
    description:
      "Step onto the pitch at The Daman Club's Net Cricket Haven, an exhilarating space designed for cricket enthusiasts of all skill levels. Sharpen your batting skills, refine your techniques, and engage in friendly matches in our meticulously designed nets. Whether you're a seasoned player or a novice, our facility promises an inclusive and thrilling cricketing experience.",
    image: "/images/facilites/5_net_cricket.jpg",
  },
];

const kidsActivities = [
  {
    id: 1,
    title: "Air Hockey",
    icon: "🏒",
    description:
      "Experience the thrill of friendly rivalry with our Air Hockey table. Glide into action as kids engage in fast-paced matches, honing their reflexes and creating memories filled with laughter and excitement.",
    image: "/images/facilites/6_air_hocket.jpg",
  },
  {
    id: 2,
    title: "Foosball",
    icon: "⚽",
    description:
      "Foster friendly competition with our Foosball table. A classic game that encourages teamwork and strategy, Foosball promises exciting moments of play for kids of all ages.",
    image: "/images/facilites/7_foosball.jpg",
  },
  {
    id: 3,
    title: "PlayStation 5",
    icon: "🎮",
    description:
      "Embark on digital adventures with our state-of-the-art PlayStation 5 Console. From captivating games to interactive experiences, with games like FIFA and Grand Theft Auto 5.",
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&q=80",
  },
  {
    id: 4,
    title: "Kids Pen",
    icon: "🧸",
    description:
      "For our littlest members, our secure and colorful play pen provides a safe haven for exploration. Filled with age-appropriate toys, it's a delightful space where toddlers can play and socialize under the watchful eye of our attentive staff.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
];

const galleryImages = [
  {
    url: "/images/3_swimming_pool.JPG",
    title: "Swimming Pool",
    description:
      "Our pristine swimming pool offers a refreshing escape for swimmers of all ages",
  },

  {
    url: "/images/facilites/3_archery.jpg",
    title: "Sports Arena",
    description:
      "State-of-the-art sports facilities for various indoor and outdoor activities",
  },
  {
    url: "/images/2_sports_and_ fitness.JPG",
    title: "Fitness Center",
    description:
      "Modern gym equipment and spacious workout areas for fitness enthusiasts",
  },
  {
    url: "/images/3_body_mind.JPG",
    title: "Poolside Ambience",
    description:
      "Beautiful poolside setting perfect for unwinding and enjoying leisure time",
  },
  {
    url: "/images/facilites/2_billiards_lounge.jpg",
    title: "Billiards Lounge",
    description:
      "Refined billiards tables providing the perfect setting for friendly competition",
  },
  {
    url: "/images/3_swimming_pool.JPG",
    title: "Kids Pool Section",
    description:
      "Dedicated kids pool area designed for safe and fun family experiences",
  },
  {
    url: "/images/4_entertainment.JPG",
    title: "Gaming Zone",
    description:
      "Exciting gaming area featuring foosball, air hockey, and more entertainment options",
  },
];

export default function FacilitiesPage() {
  const router = useRouter();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Facilities"
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
              EXPLORE OUR
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Experience Excellence in Every Corner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Swimming Pool Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              {swimmingPoolSection.title}
            </h2>
            <p
              className="text-2xl md:text-3xl mb-6"
              style={{ color: "#e2b714" }}
            >
              {swimmingPoolSection.tagline}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              {swimmingPoolSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-125 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={"/images/facilites/1_refreshing_swimming_pool.jpeg"}
                alt="Swimming Pool"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Refreshing Swimming Pool Oasis
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {swimmingPoolSection.detailedDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏊</span>
                  <span className="text-gray-700">All Ages Welcome</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">☀️</span>
                  <span className="text-gray-700">Sun Deck Area</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👶</span>
                  <span className="text-gray-700">Kids Pool</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌊</span>
                  <span className="text-gray-700">Crystal Clear Water</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="bg-[#e2b714] hover:bg-[#c19910] text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  VIEW GALLERY
                </button>
                <button
                  onClick={() => {
                    router.push("/contact");
                  }}
                  className="border-2 border-[#e2b714] text-[#e2b714] hover:bg-[#e2b714] hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              ATHLETIC EXCELLENCE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Sports Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to The Daman Club, where sports enthusiasts find their
              haven. Immerse yourself in the strategic world of net cricket,
              showcase your skills on meticulously crafted billiards tables, and
              feel the adrenaline on our cutting-edge squash court. Unleash your
              precision in archery at our adventure zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsFacilities.map((facility) => (
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
                    src={facility.image}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#e2b714] text-sm font-semibold tracking-widest mb-4">
              FOR THE LITTLE ONES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Kids Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step into a world of endless joy at The Daman Club&apos;s Kids
              Play Room. This vibrant space is thoughtfully designed to cater to
              the youngest members of our community, providing a safe and
              creative environment for exploration and laughter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsActivities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e2b714] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Experience Our Facilities
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Whether you&apos;re honing your techniques or engaging in friendly
              competition, our facilities are designed for excitement, skill
              development, and camaraderie. Join us in redefining leisure with a
              dynamic blend of sportsmanship and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  router.push("/events");
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#e2b714]! px-10 py-4 rounded-md text-lg font-semibold transition-colors"
              >
                BOOK EVENT
              </button>
              <button
                onClick={() => {
                  router.push("/facilities");
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#e2b714]! px-10 py-4 rounded-md text-lg font-semibold transition-colors"
              >
                VIEW ALL FACILITIES
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl mb-4">🏊</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                Swimming Pool
              </h3>
              <p className="text-gray-600 text-sm">Pristine Waters</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl mb-4">🏏</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                Sports Arena
              </h3>
              <p className="text-gray-600 text-sm">Multiple Sports</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl mb-4">🎮</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                Gaming Zone
              </h3>
              <p className="text-gray-600 text-sm">Kids Activities</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl mb-4">🏹</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#e2b714" }}
              >
                Adventure Zone
              </h3>
              <p className="text-gray-600 text-sm">Archery & More</p>
            </motion.div>
          </div>
        </div>
      </section>

      {isGalleryOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-100 flex items-center justify-center p-4"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#e2b714] hover:bg-[#c19910] text-white rounded-full flex items-center justify-center text-2xl font-bold transition-colors"
            >
              ×
            </button>

            {/* Gallery Header */}
            <div className="text-center pt-8 pb-4 px-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                Facilities <span style={{ color: "#e2b714" }}>Gallery</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Explore our world-class facilities through stunning visuals
              </p>
            </div>

            {/* Gallery Carousel */}
            <div className="relative max-w-5xl mx-auto pb-16">
              <Carousel
                autoplay
                autoplaySpeed={4000}
                arrows
                dots={{ className: "custom-dots" }}
                className="facility-carousel"
              >
                {galleryImages.map((item, index) => (
                  <div key={index}>
                    <div className="px-12">
                      <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                        <div className="relative h-[35vh] md:h-[40vh]">
                          <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>

              {/* Custom Arrow Buttons */}
              <button
                className="gallery-prev-arrow"
                onClick={() => {
                  const carousel = document.querySelector(
                    ".facility-carousel .slick-prev",
                  );
                  if (carousel) (carousel as HTMLElement).click();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className="gallery-next-arrow"
                onClick={() => {
                  const carousel = document.querySelector(
                    ".facility-carousel .slick-next",
                  );
                  if (carousel) (carousel as HTMLElement).click();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Add custom CSS for carousel */}
            <style jsx global>{`
              .facility-carousel .slick-dots {
                bottom: -50px;
              }
              .facility-carousel .slick-dots li {
                margin: 0 6px;
              }
              .facility-carousel .slick-dots li button {
                background: #d1d5db;
                opacity: 1;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
              .facility-carousel .slick-dots li button:hover {
                background: #e2b714;
                transform: scale(1.2);
              }
              .facility-carousel .slick-dots li.slick-active button {
                background: #e2b714;
                width: 32px;
                border-radius: 5px;
              }
              .facility-carousel .slick-prev,
              .facility-carousel .slick-next {
                display: none !important;
              }
              .gallery-prev-arrow,
              .gallery-next-arrow {
                position: absolute;
                top: 30%;
                transform: translateY(-50%);
                width: 48px;
                height: 48px;
                background: white;
                border: 2px solid #e2b714;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              }
              .gallery-prev-arrow:hover,
              .gallery-next-arrow:hover {
                background: #e2b714;
                transform: translateY(-50%) scale(1.1);
                box-shadow: 0 6px 20px rgba(226, 183, 20, 0.4);
              }
              .gallery-prev-arrow svg,
              .gallery-next-arrow svg {
                color: #e2b714;
                transition: color 0.3s ease;
              }
              .gallery-prev-arrow:hover svg,
              .gallery-next-arrow:hover svg {
                color: white;
              }
              .gallery-prev-arrow {
                left: -60px;
              }
              .gallery-next-arrow {
                right: -60px;
              }
              @media (max-width: 1024px) {
                .gallery-prev-arrow {
                  left: 10px;
                }
                .gallery-next-arrow {
                  right: 10px;
                }
              }
            `}</style>
          </div>
        </div>
      )}

      <DemoFooter />
    </div>
  );
}
