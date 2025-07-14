import AdminLayout from "@/Layouts/AdminLayout"
import { Link, router } from "@inertiajs/react"

export default function Index({ types }) {
  return (
    <AdminLayout title="Grass Types">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Grass Types</h1>
        <Link href={route("admin.grass-types.create")} className="btn-primary">
          + New Type
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {types.data.map(type => (
            <tr key={type.id} className="border-b">
              <td className="p-3">{type.name}</td>
              <td className="p-3">{type.description}</td>
              <td className="p-3 text-right space-x-2">
                <Link
                  href={route("admin.grass-types.edit", type.id)}
                  className="btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    if (confirm("Delete this type?")) {
                      router.delete(route("admin.grass-types.destroy", type.id))
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
