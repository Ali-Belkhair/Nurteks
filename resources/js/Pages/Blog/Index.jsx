import GuestLayout from "@/Layouts/GuestLayout"
import { Link } from "@inertiajs/react"

export default function BlogIndex({ posts }) {
  return (
    <GuestLayout title="Blog">
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-700">Our Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.data.map(post => (
            <div key={post.id} className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  <Link href={route("blog.show", post.slug)}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
              <div className="bg-gray-100 text-sm px-6 py-3 text-gray-500">
                By {post.user?.name} • {new Date(post.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </section>
    </GuestLayout>
  )
}