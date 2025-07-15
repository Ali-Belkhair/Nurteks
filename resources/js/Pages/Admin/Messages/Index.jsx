// resources/js/Pages/Admin/Messages/Index.jsx
import { Head, Link, useForm } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Eye, Trash2 } from 'lucide-react'

export default function Index({ messages }) {
  const { delete: destroy } = useForm()

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
      destroy(route('admin.messages.destroy', id))
    }
  }

  return (
    <AdminLayout>
      <Head title="Contact Messages" />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#15803D]">Contact Messages</h1>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Received</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.data.map((msg) => (
              <tr key={msg.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{msg.name}</td>
                <td className="px-4 py-3">{msg.email}</td>
                <td className="px-4 py-3">{msg.subject}</td>
                <td className="px-4 py-3">{new Date(msg.created_at).toLocaleString()}</td>
                <td className="px-4 py-3 text-center space-x-2">
                  <Link
                    href={route('admin.messages.show', msg.id)}
                    className="text-[#15803D] hover:underline"
                    title="View"
                  >
                    <Eye className="w-4 h-4 inline" />
                  </Link>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
