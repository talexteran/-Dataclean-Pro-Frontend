import { Outlet } from 'react-router-dom'
import { DashboardSidebar } from '../components/dashboard/sidebar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="pl-64 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  )
}
