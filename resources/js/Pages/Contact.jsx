import GuestLayout from "@/Layouts/GuestLayout"
import { useForm } from "@inertiajs/react"

export default function Contact() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route("contact.submit"), {
      onSuccess: () => reset(),
    })
  }

  return (
    <GuestLayout title="Contact Us">
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center text-green-700">Get In Touch</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="input"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="input"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              className="input"
              value={data.subject}
              onChange={(e) => setData("subject", e.target.value)}
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              className="input h-40"
              value={data.message}
              onChange={(e) => setData("message", e.target.value)}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="text-right">
            <button type="submit" className="btn-primary" disabled={processing}>
              Send Message
            </button>
          </div>
        </form>
      </section>
    </GuestLayout>
  )
}
