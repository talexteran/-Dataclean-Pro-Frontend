import { DashboardHeader } from '../components/dashboard/header'
import { StatsCard } from '../components/dashboard/stats-card'
import { RecentDatasets } from '../components/dashboard/recent-datasets'
import { ActivityFeed } from '../components/dashboard/activity-feed'
import { FileUploader } from '../components/dashboard/file-uploader'
import { Database, FileText, CheckCircle, AlertTriangle } from 'lucide-react'

const stats = [
  {
    title: 'Total Records',
    value: '79,696',
    change: '+12.5% from last month',
    changeType: 'positive' as const,
    icon: Database,
  },
  {
    title: 'Datasets',
    value: '24',
    change: '4 new this week',
    changeType: 'positive' as const,
    icon: FileText,
  },
  {
    title: 'Cleaned',
    value: '18',
    change: '75% completion rate',
    changeType: 'neutral' as const,
    icon: CheckCircle,
  },
  {
    title: 'Issues Found',
    value: '1,247',
    change: '892 resolved',
    changeType: 'negative' as const,
    icon: AlertTriangle,
  },
]

export function DashboardPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Dashboard" 
        description="Welcome back! Here is an overview of your data cleaning activity."
      />
      
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Quick Upload */}
        <FileUploader />

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentDatasets />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  )
}
