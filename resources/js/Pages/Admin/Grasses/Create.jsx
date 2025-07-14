import AdminLayout from "@/Layouts/AdminLayout"
import { useForm } from "@inertiajs/react"

export default function Create({ types }) {
  const { data, setData, post, processing, errors } = useForm({
    grass_type_id: "",
    name: "",
    description: "",
    price: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    post(route("admin.grasses.store"))
  }

  return (
    <AdminLayout title="Add Grass">
      <h1 className="text-2xl font-bold mb-6">New Grass</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block">Grass Type</label>
          <select
            value={data.grass_type_id}
            onChange={e => setData("grass_type_id", e.target.value)}
            className="input"
          >
            <option value="">-- Select Type --</option>
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          {errors.grass_type_id && <div className="text-red-500 text-sm">{errors.grass_type_id}</div>}
        </div>

        <div>
          <label className="block">Name</label>
          <input
            type="text"
            className="input"
            value={data.name}
            onChange={e => setData("name", e.target.value)}
          />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        </div>

        <div>
          <label className="block">Description</label>
          <textarea
            className="input"
            value={data.description}
            onChange={e => setData("description", e.target.value)}
          />
          {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
        </div>

        <div>
          <label className="block">Price</label>
          <input
            type="number"
            className="input"
            value={data.price}
            onChange={e => setData("price", e.target.value)}
          />
          {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
        </div>

        <button className="btn-primary" disabled={processing}>Save</button>
      </form>
    </AdminLayout>
  )
}
