import AdminLayout from "@/Layouts/AdminLayout"

export default function Show({ message }) {
  return (
    <AdminLayout title={`Message from ${message.name}`}>
      <h1 className="text-2xl font-bold mb-6">Message Detail</h1>

      <div className="space-y-3 max-w-xl bg-white p-6 rounded shadow">
        <div><strong>Name:</strong> {message.name}</div>
        <div><strong>Email:</strong> {message.email}</div>
        <div><strong>Subject:</strong> {message.subject}</div>
        <div>
          <strong>Message:</strong>
          <p className="mt-2 border-t pt-2">{message.message}</p>
        </div>
      </div>
    </AdminLayout>
  )
}
