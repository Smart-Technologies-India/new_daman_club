"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import DemoHeader from "@/components/demo-header";
import DemoFooter from "@/components/demo-footer";
import { useRouter } from "next/navigation";

const membershipPlans = [
  {
    id: 1,
    name: "BASIC MEMBERSHIP",
    // price: "₹50,000",
    period: "per year",
    description:
      "Perfect for individuals seeking occasional access to our premium facilities and amenities.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    features: [
      "Access to gym and fitness center",
      "Swimming pool access (weekdays)",
      "10% discount on restaurant",
      "Access to kids activity zone",
      "Parking facility",
      "Guest privileges (2 per month)",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "PREMIUM MEMBERSHIP",
    // price: "₹1,50,000",
    period: "per year",
    description:
      "Ideal for families and regular visitors who want comprehensive access to all club facilities.",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    features: [
      "All Basic membership benefits",
      "Unlimited swimming pool access",
      "Access to sports facilities (billiards, squash, archery)",
      "20% discount on restaurant and events",
      "Priority booking for event spaces",
      "Guest privileges (10 per month)",
      "Complimentary birthday celebration",
      "Access to theater room",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "ELITE MEMBERSHIP",
    // price: "₹3,50,000",
    period: "per year",
    description:
      "Exclusive membership offering unlimited access and VIP treatment with premium privileges.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    features: [
      "All Premium membership benefits",
      "Unlimited guest privileges",
      "30% discount on all services",
      "Priority access to all facilities",
      "Complimentary event hosting (2 per year)",
      "Dedicated concierge service",
      "Exclusive member-only events",
      "Valet parking service",
      "Personal training sessions (monthly)",
    ],
    popular: false,
  },
  {
    id: 4,
    name: "CORPORATE MEMBERSHIP",
    // price: "₹5,00,000",
    period: "per year (up to 50 employees)",
    description:
      "Designed for corporations to provide their employees with wellness and recreational benefits.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Access for up to 50 employees",
      "All Elite membership benefits",
      "Conference room booking (priority)",
      "Team building event support",
      "Corporate event hosting (4 per year)",
      "Customized wellness programs",
      "Dedicated account manager",
      "Flexible payment terms",
      "Additional employee slots available",
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: "🏊",
    title: "World-Class Facilities",
    description:
      "State-of-the-art amenities including swimming pool, gym, sports facilities, and more.",
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    description:
      "Enjoy multi-cuisine restaurant with special discounts for members.",
  },
  {
    icon: "🎉",
    title: "Event Hosting",
    description:
      "Priority booking and exclusive rates for hosting your special events.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Friendly",
    description:
      "Dedicated kids activity zones and family-oriented facilities.",
  },
  {
    icon: "🎯",
    title: "Sports & Recreation",
    description:
      "Access to billiards, archery, squash, and various sports facilities.",
  },
  {
    icon: "🤝",
    title: "Networking",
    description:
      "Connect with like-minded individuals and grow your professional network.",
  },
];

export default function MembershipPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <DemoHeader />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
            alt="Membership"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <p className="text-sm tracking-widest text-[#e2b714] mb-4">
            JOIN OUR EXCLUSIVE COMMUNITY
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            MEMBERSHIP PLANS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Choose the perfect membership plan that suits your lifestyle and
            unlock a world of luxury and privilege
          </p>
        </motion.div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest text-[#e2b714] mb-4">
              FIND YOUR PERFECT FIT
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Membership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our range of carefully crafted membership plans
              designed to cater to your unique needs and preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-lg shadow-xl overflow-hidden border-2 ${
                  plan.popular ? "border-[#e2b714]" : "border-gray-200"
                } hover:shadow-2xl transition-all duration-300 ${
                  selectedPlan === plan.id ? "ring-4 ring-[#e2b714]/30" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#e2b714] text-white px-4 py-1 text-sm font-bold tracking-widest">
                    MOST POPULAR
                  </div>
                )}

                <div className="grid md:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    {/* <div className="mb-4">
                      <span className="text-4xl font-bold text-[#e2b714]">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div> */}
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-[#e2b714] mt-0.5 shrink-0"
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
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 px-6 rounded-lg font-bold tracking-widest transition-all duration-300 ${
                        plan.popular
                          ? "bg-[#e2b714] text-white hover:bg-[#c19910]"
                          : "bg-white text-[#e2b714]! border-2 border-[#e2b714] hover:bg-[#e2b714] hover:text-white"
                      }`}
                    >
                      SELECT PLAN
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-widest text-[#e2b714] mb-4">
              WHY JOIN US
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the finest amenities and services designed exclusively
              for our members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#e2b714]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Become a member today and start enjoying exclusive access to our
              world-class facilities and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-transparent text-white py-4 px-8 rounded-lg font-bold tracking-widest border-2 border-white hover:bg-white hover:text-[#e2b714]! transition-all duration-300">
                APPLY NOW
              </button>
              <button
                onClick={() => {
                  router.push("/contact");
                }}
                className="bg-transparent text-white py-4 px-8 rounded-lg font-bold tracking-widest border-2 border-white hover:bg-white hover:text-[#e2b714]! transition-all duration-300"
              >
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
