import GuestLayout from "@/Layouts/GuestLayout"
import { Link } from "@inertiajs/react"

export default function BlogShow({ post }) {
  return (
    <GuestLayout title={post.title}>
      <section className="max-w-3xl mx-auto py-16 px-4">
        <Link href={route("blog.index")} className="text-green-600 hover:underline text-sm mb-4 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold text-green-800 mb-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          By {post.user?.name} • {new Date(post.created_at).toLocaleDateString()}
        </div>

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </GuestLayout>
  )
}
