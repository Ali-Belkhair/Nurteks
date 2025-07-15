// resources/js/Pages/Admin/Messages/Show.jsx
import { Head, Link } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Show({ message }) {
  return (
    <AdminLayout>
      <Head title="View Message" />

      <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold text-[#15803D] mb-4">Contact Message</h1>

        <div className="mb-4">
          <p><span className="font-medium">Name:</span> {message.name}</p>
          <p><span className="font-medium">Email:</span> {message.email}</p>
          <p><span className="font-medium">Subject:</span> {message.subject}</p>
          <p><span className="font-medium">Sent:</span> {new Date(message.created_at).toLocaleString()}</p>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">Message</h2>
          <p className="text-gray-800 whitespace-pre-line">{message.message}</p>
        </div>

        <div className="mt-6">
          <Link
            href={route('admin.messages.index')}
            className="text-sm text-gray-600 hover:text-[#15803D] underline"
          >
            ← Back to messages
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}
