import { Link, usePage } from '@inertiajs/react'
import {
  Home,
  Newspaper,
  Leaf,
  UserCog,
  LogOut,
  Menu,
  ChevronLeft,
  Mail,
} from 'lucide-react'
import { useState } from 'react'

export default function AdminLayout({ children }) {
  const { auth } = usePage().props
  const [collapsed, setCollapsed] = useState(false)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  const menu = [
    {
      label: 'Dashboard',
      icon: Home,
      href: '/admin/dashboard',
    },
    {
      label: 'Posts',
      icon: Newspaper,
      children: [
        { label: 'All Posts', href: '/admin/posts' },
        { label: 'Create Post', href: '/admin/posts/create' },
      ],
    },
    {
      label: 'Artificial Grass',
      icon: Leaf,
      children: [
        { label: 'All Grass', href: '/admin/grasses' },
        { label: 'Create Grass', href: '/admin/grasses/create' },
      ],
    },
    {
      label: 'Grass Types',
      icon: Leaf,
      children: [
        { label: 'All Types', href: '/admin/grass-types' },
        { label: 'Create Type', href: '/admin/grass-types/create' },
      ],
    },
    {
      label: 'Users',
      icon: UserCog,
      children: [
        { label: 'All Admins', href: '/admin/users' },
        { label: 'Create Admin', href: '/admin/users/create' },
      ],
    },
    {
      label: 'Messages',
      icon: Mail,
      children: [
        { label: 'All Messages', href: '/admin/messages' },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-white border-r shadow-sm flex flex-col transition-all duration-200 ${collapsed ? 'w-20' : 'w-64'}`}>
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          {!collapsed && <span className="text-xl font-bold text-[#15803D]">Nurteks</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 hover:text-[#15803D] transition"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {menu.map(({ label, icon: Icon, href, children }) => {
            const isActive = href
              ? currentPath.startsWith(href)
              : children?.some(sub => currentPath.startsWith(sub.href))

            return (
              <div key={label} className="group relative">
                {href ? (
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#15803D] text-white shadow'
                        : 'text-gray-700 hover:bg-[#15803D]/10 hover:text-[#15803D]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {!collapsed && <span>{label}</span>}
                  </Link>
                ) : (
                  <div
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                      isActive
                        ? 'bg-[#15803D] text-white shadow'
                        : 'text-gray-700 hover:bg-[#15803D]/10 hover:text-[#15803D]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {!collapsed && <span>{label}</span>}
                  </div>
                )}

                {/* Hover Submenu (collapsed) */}
                {children && (
                  <div
                    className={`absolute left-full top-0 z-10 ml-2 min-w-[180px] rounded-md border bg-white p-2 shadow-lg
                      transition-all duration-200 opacity-0 scale-95 pointer-events-none
                      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                      ${collapsed ? '' : 'hidden'}
                    `}
                  >
                    {children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-3 py-2 rounded text-sm whitespace-nowrap ${
                          currentPath === sub.href
                            ? 'bg-[#15803D] text-white'
                            : 'text-gray-700 hover:bg-[#15803D]/10 hover:text-[#15803D]'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Inline submenu (expanded) */}
                {!collapsed && children && (
                  <div className="ml-8 mt-1 space-y-1">
                    {children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-3 py-1.5 rounded text-sm ${
                          currentPath === sub.href
                            ? 'bg-[#15803D] text-white'
                            : 'text-gray-600 hover:bg-[#15803D]/10 hover:text-[#15803D]'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Logout */}
        <form method="POST" action="/logout" className="p-4 border-t">
          <button
            type="submit"
            className="flex items-center gap-2 w-full text-left text-sm font-medium text-red-600 hover:text-red-800 transition"
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span>Logout</span>}
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <div className="text-sm text-gray-600">
            Logged in as: <span className="font-medium">{auth.user.name}</span>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
