import AdminLayout from "@/Layouts/AdminLayout"
import { useForm } from "@inertiajs/react"

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    content: "",
    published: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    post(route("admin.posts.store"))
  }

  return (
    <AdminLayout title="Create Post">
      <h1 className="text-2xl font-bold mb-6">New Blog Post</h1>

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
          Save
        </button>
      </form>
    </AdminLayout>
  )
}
