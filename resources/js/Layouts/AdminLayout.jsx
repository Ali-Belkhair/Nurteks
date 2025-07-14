import { Link, usePage } from '@inertiajs/react'
import { Home, Newspaper, Leaf, UserCog } from 'lucide-react'

export default function AdminLayout({ children }) {
  const { auth } = usePage().props

  const menu = [
    { label: 'Dashboard', icon: <Home className="w-4 h-4" />, href: '/admin/dashboard' },
    { label: 'Posts', icon: <Newspaper className="w-4 h-4" />, href: '/admin/posts' },
    { label: 'Artificial Grass', icon: <Leaf className="w-4 h-4" />, href: '/admin/grass' },
    { label: 'Grass Types', icon: <Leaf className="w-4 h-4" />, href: '/admin/grass-types' },
    { label: 'Users', icon: <UserCog className="w-4 h-4" />, href: '/admin/users' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-primary">Nurteks Admin</h2>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded hover:bg-primary hover:text-white transition"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
          <div className="text-sm text-gray-600">
            Logged in as: <span className="font-medium">{auth.user.name}</span>
          </div>
        </div>
        <div>{children}</div>
      </main>
    </div>
  )
}
