import AdminLayout from "@/Layouts/AdminLayout"
import { useForm } from "@inertiajs/react"

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    description: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    post(route("admin.grass-types.store"))
  }

  return (
    <AdminLayout title="New Grass Type">
      <h1 className="text-2xl font-bold mb-6">Add Grass Type</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="input"
            value={data.name}
            onChange={e => setData("name", e.target.value)}
          />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            className="input"
            value={data.description}
            onChange={e => setData("description", e.target.value)}
          />
          {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
        </div>

        <button className="btn-primary" disabled={processing}>
          Save
        </button>
      </form>
    </AdminLayout>
  )
}
