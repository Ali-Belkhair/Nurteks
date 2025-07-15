// resources/js/Pages/Admin/Users/Index.jsx
import { Head, Link, useForm } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Plus, Trash2 } from 'lucide-react'

export default function Index({ users }) {
  const { delete: destroy } = useForm()

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this admin user?')) {
      destroy(route('admin.users.destroy', id))
    }
  }

  return (
    <AdminLayout>
      <Head title="Manage Admin Users" />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#15803D]">Admin Users</h1>
        <Link
          href={route('admin.users.create')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#15803D] text-white rounded hover:bg-[#146C35] transition"
        >
          <Plus className="w-4 h-4" /> New Admin
        </Link>
      </div>

      <div className="bg-white w-full rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination (if needed) */}
        <div className="p-4">
          {/* Add pagination links if required */}
        </div>
      </div>
    </AdminLayout>
  )
}
