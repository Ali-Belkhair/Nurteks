import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router } from "@inertiajs/react"

export default function Index({ grasses }) {
  return (
    <AdminLayout title="Grass List">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Grass</h1>
        <Link href={route("admin.grasses.create")} className="btn-primary">+ Add Grass</Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3">Price</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {grasses.data.map(grass => (
            <tr key={grass.id} className="border-b">
              <td className="p-3">{grass.name}</td>
              <td className="p-3">{grass.type?.name}</td>
              <td className="p-3 text-center">{grass.price ?? '-'}</td>
              <td className="p-3 text-right space-x-2">
                <Link href={route("admin.grasses.edit", grass.id)} className="btn-sm">Edit</Link>
                <button
                  onClick={() => confirm("Delete this item?") && router.delete(route("admin.grasses.destroy", grass.id))}
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
