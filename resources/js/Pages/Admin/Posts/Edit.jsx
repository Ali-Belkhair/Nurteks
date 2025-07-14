import AdminLayout from "@/Layouts/AdminLayout"
import { useForm } from "@inertiajs/react"

export default function Edit({ post }) {
  const { data, setData, put, processing, errors } = useForm({
    title: post.title || "",
    content: post.content || "",
    published: !!post.published
  })

  const handleSubmit = e => {
    e.preventDefault()
    put(route("admin.posts.update", post.id))
  }

  return (
    <AdminLayout title="Edit Post">
      <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={e => setData("title", e.target.value)}
            className="input"
          />
          {errors.title && <div className="text-red-500">{errors.title}</div>}
        </div>

        <div>
          <label className="block">Content</label>
          <textarea
            value={data.content}
            onChange={e => setData("content", e.target.value)}
            className="input h-40"
          />
          {errors.content && <div className="text-red-500">{errors.content}</div>}
        </div>

        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={data.published}
            onChange={e => setData("published", e.target.checked)}
          />
          <span className="ml-2">Publish</span>
        </label>

        <button type="submit" className="btn-primary" disabled={processing}>
          Update
        </button>
      </form>
    </AdminLayout>
  )
}