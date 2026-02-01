"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/facilities", label: "Facilities" },
    { href: "/amenities", label: "Amenities" },
    { href: "/restaurant", label: "Restaurant" },
    { href: "/events", label: "Events" },
    // { href: "/membership", label: "Membership" },
    // { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "#e2b714" }}>
              THE DAMAN CLUB
            </Link>
            
            {/* Desktop Menu */}
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

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-colors"
                style={{ backgroundColor: isMenuOpen ? "#e2b714" : undefined }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-700 mb-1.5"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-700 transition-colors"
                style={{ backgroundColor: isMenuOpen ? "#e2b714" : undefined }}
              />
            </button>

            {/* <button className="bg-[#e2b714] hover:bg-[#c19910] text-white px-6 py-3 rounded-md font-semibold transition-colors">
              Book Now
            </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 md:hidden"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Menu Items */}
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block py-4 px-4 rounded-lg text-lg font-medium transition-all ${
                          pathname === link.href
                            ? "bg-[#e2b714]/10 text-[#e2b714] font-semibold"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#e2b714]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-auto pb-8 pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-gray-500 text-center">
                    © 2026 The Daman Club
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
