'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/navigation';

export default function CoursePage() {
  const stats = [
    { number: '100+', label: 'Events Done' },
    { number: '18', label: 'Holes Course' },
    { number: '50', label: 'Bays Driving Range' },
    { number: '25+', label: 'Years of Excellence' }
  ];

  const facilities = [
    {
      title: 'Driving Range',
      description: 'A state-of-the-art, night-lit range spanning 250 yards. Featuring multiple bays, an artificial turf putting green, and practice facilities.',
      icon: '🏌️'
    },
    {
      title: 'Clubhouse',
      description: 'The epitome of luxury and comfort. Offering a restaurant, bar, conference rooms, fitness center, and fully equipped changing rooms.',
      icon: '🏛️'
    },
    {
      title: 'Eco-Friendly Features',
      description: 'Commitment to sustainability reflected in using treated water for irrigation and innovative water management systems.',
      icon: '🌱'
    },
    {
      title: 'Commitment to Excellence',
      description: 'We prioritize maintaining pristine course conditions to ensure an unparalleled golfing experience for all valued players.',
      icon: '⭐'
    }
  ];

  const awards = [
    {
      title: 'Best Maintained Golf Course',
      year: '2010',
      organization: 'Asian Golf Industry'
    },
    {
      title: 'Best Clubhouse Facilities',
      year: '2019',
      organization: 'Golf India Association'
    },
    {
      title: 'Best Renovated Golf Course',
      year: '2022',
      organization: 'Golf India Association'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Our <span style={{ color: '#ad8b3a' }}>Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to Daman Club, an iconic destination that combines history, modernity, and exceptional experiences. 
              Spanning acres of lush greens, this remarkable facility caters to both seasoned professionals and enthusiastic beginners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our <span style={{ color: '#ad8b3a' }}>History</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Established as one of India&apos;s premier clubs, Daman Club has been a beacon of excellence 
                  since its inception. Our journey began with a vision to create a world-class facility 
                  that celebrates both tradition and innovation.
                </p>
                <p>
                  Originally designed by renowned architects, the club underwent transformative upgrades 
                  introducing state-of-the-art features. The redevelopment included sophisticated drainage systems, 
                  eco-friendly water management, and seamless irrigation—showcasing a harmonious blend of innovation 
                  and sustainability.
                </p>
                <p>
                  Today, Daman Club stands as a testament to our commitment to providing an unparalleled experience, 
                  combining modern amenities with timeless charm that welcomes members of all skill levels.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80"
                alt="Daman Club History"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Vision & <span style={{ color: '#ad8b3a' }}>Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#1a5946] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                At Daman Club, our vision is to make excellence accessible to all while upholding the highest 
                standards of quality and sustainability. We strive to nurture a vibrant community of enthusiasts, 
                fostering talent and encouraging participation from all walks of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#1a5946] rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide an unparalleled experience, blending world-class amenities with the charm 
                of an inclusive and eco-conscious ethos. We are dedicated to creating memorable moments and fostering 
                a sense of belonging for every member.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#1a5946]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#ad8b3a' }}>
                  {stat.number}
                </div>
                <div className="text-white text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Design & Facilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Course Design & <span style={{ color: '#ad8b3a' }}>Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed to challenge and inspire, our course offers an exquisite layout that caters to players 
              of all skill levels. With a seamless blend of natural beauty and strategic design, the course 
              provides a captivating yet demanding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl hover:border-[#ad8b3a] hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Images Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Course <span style={{ color: '#ad8b3a' }}>Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our stunning course through these captivating images showcasing the beauty and 
              challenges that await you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80", hole: 1, par: 3 },
              { id: 2, image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80", hole: 2, par: 4 },
              { id: 3, image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80", hole: 3, par: 4 },
              { id: 4, image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80", hole: 4, par: 5 },
              { id: 5, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", hole: 5, par: 3 },
              { id: 6, image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80", hole: 6, par: 4 }
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <Image
                  src={item.image}
                  alt={`Course view Hole ${item.hole}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a5946]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-lg font-bold" style={{ color: '#ad8b3a' }}>Hole {item.hole}</h4>
                    <p className="text-sm">Par {item.par}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Awards & <span style={{ color: '#ad8b3a' }}>Accolades</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Daman Club has been consistently recognized for its excellence, earning prestigious accolades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-[#ad8b3a]/30 p-8 rounded-2xl text-center hover:border-[#ad8b3a] hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-[#ad8b3a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{award.title}</h3>
                <p className="text-lg font-semibold mb-1" style={{ color: '#ad8b3a' }}>{award.year}</p>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Development Program */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80"
                alt="Junior Development Program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Junior Development <span style={{ color: '#ad8b3a' }}>Program</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In line with our mission to nurture talent, we host a Junior Development Program for children 
                  aged 6 to 18. The program runs throughout the week and extends coaching to young enthusiasts, 
                  ensuring that our sport remains accessible for all.
                </p>
                <p>
                  Whether you&apos;re a seasoned player seeking a challenging experience, a beginner stepping into 
                  our world, or a family looking for a serene escape, Daman Club promises an experience that is 
                  as inclusive as it is extraordinary.
                </p>
                <div className="pt-6">
                  <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a5946]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our <span style={{ color: '#ad8b3a' }}>Family</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Step into our world—where history meets modernity, and every moment counts. 
              We look forward to welcoming you to Daman Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ad8b3a] hover:bg-[#8d7330] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Book Tee Time
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all">
                Become a Member
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t-2 border-[#ad8b3a]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="border-t border-[#ad8b3a]/30 mt-8 pt-8 text-center text-gray-500">
            <p>Copyright © 2025 - Daman Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
