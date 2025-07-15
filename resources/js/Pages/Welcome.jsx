import GuestLayout from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import { Mail } from 'lucide-react'

export default function Welcome() {
  return (
    <GuestLayout>
      {/* Hero Section */}
      <section className="relative bg-[url('/images/')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Artificial Grass, Reimagined for Morocco
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Premium quality from a global leader. Perfect for homes, sports fields, and urban decor.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#15803D] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#15803D]">About Nurteks Morocco</h2>
          <p className="text-gray-600 text-lg">
            We are the official Moroccan franchise of <strong>Nurteks</strong>, one of the leading artificial grass manufacturers in the world.
            With 20+ years of global experience, we deliver innovative and sustainable turf solutions for all uses.
          </p>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Grass Types</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl">
              <img src={`/images/grass${i}.jpg`} alt={`Grass ${i}`} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-[#15803D]">Landscape Grass {i}</h3>
                <p className="text-gray-600 text-sm">
                  Durable, soft-touch synthetic grass for outdoor spaces, patios, and decor.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/grass-types" className="text-[#15803D] underline font-semibold">
            View All Grass Types
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Applications</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Home & Garden', img: '/images/use-home.jpg' },
            { title: 'Sports Fields', img: '/images/use-sports.jpg' },
            { title: 'Balcony & Decor', img: '/images/use-decor.jpg' },
          ].map(({ title, img }) => (
            <div key={title} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-[#15803D]">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nurteks */}
      <section className="py-20 px-6 bg-[#15803D] text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nurteks?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Eco-Friendly & Non-Toxic',
            '20+ Years of Global Expertise',
            'UV & Heat Resistant',
            'Professional Installation Support',
          ].map((reason, i) => (
            <div key={i} className="bg-white/10 p-5 rounded-md">
              <h3 className="font-semibold text-lg mb-1">✓ {reason}</h3>
              <p className="text-sm">We deliver unmatched performance, beauty, and durability.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">From Our Blog</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-50 p-5 shadow rounded-lg transition hover:shadow-md">
              <img src={`/images/blog${i}.jpg`} alt={`Blog ${i}`} className="rounded mb-4 h-40 w-full object-cover" />
              <h3 className="font-semibold text-lg text-[#15803D] mb-2">
                How to Choose Artificial Grass ({i})
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Tips and tricks for selecting the right grass for your space, budget, and weather.
              </p>
              <Link href={`/blog/post-${i}`} className="text-sm text-[#15803D] underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-[#15803D] underline font-semibold">
            View All Blog Posts
          </Link>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Partners</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`/images/brand${i}.png`}
              alt={`Partner ${i}`}
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="bg-[#15803D] text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Bring Green to Morocco</h2>
        <p className="mb-6">Contact us for franchise opportunities, wholesale orders, or installation support.</p>
        <Link
          href="/contact"
          className="bg-white text-[#15803D] px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
        >
          Contact Now
        </Link>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905537398298" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.82 11.82 0 0012.2.5C6.2.5 1.23 5.47 1.23 11.47a11.4 11.4 0 001.73 6L.5 23.5l6.17-1.6a11.7 11.7 0 005.5 1.4h.06c6 0 10.94-4.97 10.94-10.97a10.82 10.82 0 00-3.65-8.35zM12.2 21.4a9.2 9.2 0 01-4.69-1.26l-.34-.2-3.66.95.98-3.56-.22-.37a9.3 9.3 0 01-1.46-5c0-5.14 4.18-9.32 9.32-9.32a9.2 9.2 0 019.32 9.32c0 5.14-4.18 9.32-9.32 9.32zm5.13-6.79c-.27-.13-1.6-.79-1.84-.88s-.43-.13-.6.13-.69.88-.84 1.06-.31.2-.58.07a7.6 7.6 0 01-2.2-1.37 8 8 0 01-1.48-1.83c-.15-.27 0-.41.11-.54.11-.11.27-.3.4-.45.13-.15.17-.26.26-.43s.04-.33-.02-.46c-.07-.13-.6-1.46-.82-2s-.44-.46-.6-.47h-.51c-.15 0-.38.05-.57.26s-.75.74-.75 1.79.77 2.07.87 2.21c.11.13 1.52 2.32 3.68 3.25.52.23.92.37 1.23.48.52.17.99.14 1.36.09.41-.06 1.26-.52 1.44-1.02.18-.51.18-.94.13-1.02-.06-.07-.25-.12-.52-.25z" />
          </svg>
        </a>

        
        {/* Email Button */}
        <a
          href="mailto:abdesslam.mouloud@nurtekse.com.tr"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>

      </div>

    </GuestLayout>
  )
}
