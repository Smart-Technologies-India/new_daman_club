"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DemoHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/demo", label: "Home" },
    { href: "/demo/about", label: "About" },
    { href: "/demo/facilities", label: "Facilities" },
    { href: "/demo/amenities", label: "Amenities" },
    { href: "/demo/restaurant", label: "Restaurant" },
    { href: "/demo/events", label: "Events" },
    // { href: "/demo/membership", label: "Membership" },
    // { href: "/demo/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/demo" className="text-3xl font-serif font-bold" style={{ color: "#e2b714" }}>
            THE DAMAN CLUB
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  pathname === link.href
                    ? "text-[#e2b714] font-semibold"
                    : "text-gray-700 hover:text-[#e2b714]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* <button className="bg-[#e2b714] hover:bg-[#c19910] text-white px-6 py-3 rounded-md font-semibold transition-colors">
            Book Now
          </button> */}
        </div>
      </div>
    </nav>
  );
}
