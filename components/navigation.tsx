'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#ad8b3a]/30 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold" style={{ color: '#ad8b3a' }}>
            Daman Club
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium ${
                isActive('/') 
                  ? 'font-semibold' 
                  : 'text-gray-700 hover:text-[#ad8b3a]'
              }`}
              style={isActive('/') ? { color: '#ad8b3a' } : {}}
            >
              Home
            </Link>
            <Link
              href="/course"
              className={`transition-colors font-medium ${
                isActive('/course') 
                  ? 'font-semibold' 
                  : 'text-gray-700 hover:text-[#ad8b3a]'
              }`}
              style={isActive('/course') ? { color: '#ad8b3a' } : {}}
            >
              The Course
            </Link>
            <Link
              href="/#facilities"
              className="text-gray-700 transition-colors font-medium hover:text-[#ad8b3a]"
            >
              Facilities
            </Link>
            <Link
              href="/#events"
              className="text-gray-700 transition-colors font-medium hover:text-[#ad8b3a]"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium ${
                isActive('/contact') 
                  ? 'font-semibold' 
                  : 'text-gray-700 hover:text-[#ad8b3a]'
              }`}
              style={isActive('/contact') ? { color: '#ad8b3a' } : {}}
            >
              Contact
            </Link>
          </div>
          <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
