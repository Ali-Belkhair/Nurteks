import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router } from "@inertiajs/react"

export default function Index({ messages }) {
  return (
    <AdminLayout title="Messages">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>

      <table className="w-full bg-white shadow rounded-xl text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Subject</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.data.map(msg => (
            <tr key={msg.id} className="border-b">
              <td className="p-3">{msg.name}</td>
              <td className="p-3">{msg.email}</td>
              <td className="p-3">{msg.subject}</td>
              <td className="p-3 text-right space-x-2">
                <Link href={route("admin.messages.show", msg.id)} className="btn-sm">View</Link>
                <button
                  onClick={() => confirm("Delete this message?") && router.delete(route("admin.messages.destroy", msg.id))}
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
