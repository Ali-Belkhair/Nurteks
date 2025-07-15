import { Head } from '@inertiajs/react'
import AdminLayout from '@/Layouts/AdminLayout'
import {
  UserIcon,
  FileTextIcon,
  MailIcon,
  LeafIcon,
  LayersIcon,
} from 'lucide-react'

export default function Dashboard({ stats }) {
  return (
    <AdminLayout>
      <Head title="Dashboard" />

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-[#15803D] mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={<UserIcon className="w-6 h-6" />}
            label="Admins"
            count={stats.admins}
            color="bg-[#15803D]/10 text-[#15803D]"
          />
          <StatCard
            icon={<FileTextIcon className="w-6 h-6" />}
            label="Blog Posts"
            count={stats.posts}
            color="bg-[#15803D]/10 text-[#15803D]"
          />
          <StatCard
            icon={<LeafIcon className="w-6 h-6" />}
            label="Artificial Grasses"
            count={stats.grasses}
            color="bg-[#15803D]/10 text-[#15803D]"
          />
          <StatCard
            icon={<LayersIcon className="w-6 h-6" />}
            label="Grass Types"
            count={stats.grassTypes}
            color="bg-[#15803D]/10 text-[#15803D]"
          />
          <StatCard
            icon={<MailIcon className="w-6 h-6" />}
            label="Contact Messages"
            count={stats.messages}
            color="bg-[#15803D]/10 text-[#15803D]"
          />
        </div>
      </div>
    </AdminLayout>
  )
}

function StatCard({ icon, label, count, color }) {
  return (
    <div className={`rounded-xl p-5 shadow bg-white flex items-center justify-between`}>
      <div>
        <h2 className="text-lg font-semibold text-gray-600">{label}</h2>
        <p className="text-2xl font-bold text-gray-900 mt-1">{count}</p>
      </div>
      <div
        className={`rounded-full p-3 ${color} flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  )
}
