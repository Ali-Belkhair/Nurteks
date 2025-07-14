import { Link, usePage } from '@inertiajs/react'
import { useState } from 'react'

export default function GuestLayout({ children }) {
  const [open, setOpen] = useState(false)
  const { url } = usePage()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Artificial Grass', href: '/grass' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-[#15803D] tracking-tight">
          Nurteks Morocco
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition duration-200 hover:text-[#15803D] ${
                url === link.href ? "text-[#15803D]" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-gray-800"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white border-t">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition duration-150 ${
                  url === link.href ? "text-[#15803D]" : "text-gray-700"
                } hover:text-[#15803D]`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-12">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-primary mb-2">Nurteks Morocco</h3>
            <p className="text-sm text-gray-600">
              Official franchise of Nurteks® in Morocco. Premium artificial grass solutions for sport, landscape & more.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Email: info@nurteks.ma</li>
              <li>Phone: +212 6 12 34 56 78</li>
              <li>Location: Casablanca, Morocco</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 py-4 border-t">
          © {new Date().getFullYear()} Nurteks Morocco. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
