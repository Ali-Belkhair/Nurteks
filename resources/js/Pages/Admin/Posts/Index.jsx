import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router } from "@inertiajs/react"

export default function Index({ posts }) {
  return (
    <AdminLayout title="Posts">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link href={route("admin.posts.create")} className="btn-primary">+ New Post</Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Published</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.data.map(post => (
            <tr key={post.id} className="border-b">
              <td className="p-3">{post.title}</td>
              <td className="p-3">{post.user?.name}</td>
              <td className="p-3">{post.published ? "Yes" : "No"}</td>
              <td className="p-3 text-right space-x-2">
                <Link href={route("admin.posts.edit", post.id)} className="btn-sm">Edit</Link>
                <button
                  onClick={() => {
                    if (confirm("Delete this post?")) {
                      router.delete(route("admin.posts.destroy", post.id))
                    }
                  }}
                  className="btn-sm-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}
