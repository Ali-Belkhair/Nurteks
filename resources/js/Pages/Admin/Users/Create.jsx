// resources/js/Pages/Admin/Users/Create.jsx
import { Head, useForm } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import PrimaryButton from '@/Components/PrimaryButton'

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const submit = (e) => {
    e.preventDefault()
    post(route('admin.users.store'))
  }

  return (
    <AdminLayout>
      <Head title="Add Admin User" />

      <h1 className="text-2xl font-bold text-[#15803D] mb-6">Create New Admin</h1>

      <form onSubmit={submit} className="bg-white p-6 rounded shadow-md max-w-lg">
        <div className="mb-4">
          <InputLabel htmlFor="name" value="Name" />
          <TextInput
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className="mt-1 block w-full"
          />
          <InputError message={errors.name} className="mt-1" />
        </div>

        <div className="mb-4">
          <InputLabel htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            className="mt-1 block w-full"
          />
          <InputError message={errors.email} className="mt-1" />
        </div>

        <div className="mb-6">
          <InputLabel htmlFor="password" value="Password" />
          <TextInput
            id="password"
            type="password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            className="mt-1 block w-full"
          />
          <InputError message={errors.password} className="mt-1" />
        </div>

        <PrimaryButton disabled={processing}>Create Admin</PrimaryButton>
      </form>
    </AdminLayout>
  )
}
