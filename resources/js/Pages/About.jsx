import GuestLayout from "@/Layouts/GuestLayout"

export default function About() {
  return (
    <GuestLayout title="About Us">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Hero Image */}
        <img
          src="https://nurteks.com.tr/wp-content/uploads/2024/05/slider-comparison-hali1.png"
          alt="Nurteks Turf"
          className="w-full h-64 object-cover rounded-lg mb-10 shadow"
        />

        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">About Nurteks Morocco</h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Founded in <strong>1972</strong>, Nurteks introduced synthetic turf to Turkey in <strong>1983</strong>. Today, with two state-of-the-art production facilities in Çorlu and Çerkezköy, and a 25,000 m² manufacturing area, Nurteks stands as one of the global leaders in artificial grass production.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The company produces high-performance surfaces for a wide range of sports — football, tennis, golf, basketball — as well as decorative lawns for landscaping and playgrounds. Nurteks is recognized for quality, innovation, and sustainability.
        </p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <img
            src="https://nurteks.com.tr/wp-content/uploads/2023/12/nurteks-suni-cim.jpg"
            alt="Artificial Grass"
            className="w-full h-60 object-cover rounded shadow"
          />
          <img
            src="https://nurteks.com.tr/wp-content/uploads/2023/11/nurteks-suni-cim-uretim.jpg"
            alt="Grass Production"
            className="w-full h-60 object-cover rounded shadow"
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          In <strong>2001</strong>, Nurteks became a FIFA-licensed manufacturer and has since delivered over 400 FIFA-certified professional fields. With more than 60 million m² of turf sold worldwide in 2019 alone, Nurteks has achieved remarkable global success.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Mission & Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mission:</strong> To offer reliable, innovative, and high-quality solutions in artificial grass production, fostering long-term trust with customers through sustainability and technology.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Vision:</strong> To be a globally trusted brand known for excellence in turf manufacturing and customer satisfaction.
          </p>
        </div>

        {/* More Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Certifications & Standards</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>FIFA Quality Certified</li>
              <li>SEDEX Ethical Trade Certified</li>
              <li>ISO 9001 Quality Standards</li>
              <li>FIH, ITF, GAA Compliance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Global Reach</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Exported to 60+ countries</li>
              <li>12 distributors in Turkey</li>
              <li>500+ retailers worldwide</li>
              <li>Leader in North Africa & Middle East</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Contact Us for Franchise Opportunities
          </a>
        </div>
      </section>
    </GuestLayout>
  )
}
