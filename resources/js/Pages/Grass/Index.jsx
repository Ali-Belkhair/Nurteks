import GuestLayout from "@/Layouts/GuestLayout"
import { Link } from "@inertiajs/react"

export default function GrassIndex({ types }) {
  return (
    <GuestLayout title="Artificial Grass">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">Artificial Grass</h1>

        {types.map(type => (
          <div key={type.id} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">{type.name}</h2>
            {type.description && <p className="text-gray-600 mb-4">{type.description}</p>}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {type.grasses.map(grass => (
                <div key={grass.id} className="bg-white shadow rounded p-5 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    <Link href={route('grass.show', grass.slug)}>{grass.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {grass.description?.slice(0, 100) || "No description."}
                  </p>
                  {grass.price && (
                    <div className="text-sm text-gray-800 font-semibold">
                      Price: <span className="text-green-700">{grass.price} MAD</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </GuestLayout>
  )
}
