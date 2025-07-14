import GuestLayout from "@/Layouts/GuestLayout"
import { Link } from "@inertiajs/react"

export default function GrassShow({ grass }) {
  return (
    <GuestLayout title={grass.name}>
      <section className="max-w-3xl mx-auto py-16 px-4">
        <Link href={route('grass.index')} className="text-green-600 hover:underline text-sm mb-4 inline-block">
          ← Back to All Grass
        </Link>

        <h1 className="text-4xl font-bold text-green-800 mb-4">{grass.name}</h1>
        <div className="text-sm text-gray-500 mb-6">
          Category: <span className="font-medium">{grass.type?.name}</span>
        </div>

        {grass.price && (
          <div className="mb-4 text-lg font-semibold text-green-600">
            Price: {grass.price} MAD
          </div>
        )}

        <article className="prose max-w-none text-gray-800">
          {grass.description ? (
            <div dangerouslySetInnerHTML={{ __html: grass.description }} />
          ) : (
            <p>No description available.</p>
          )}
        </article>
      </section>
    </GuestLayout>
  )
}
