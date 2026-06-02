import { useState } from 'react'
import { DashboardHeader } from '../components/dashboard/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import {
  FileText,
  Search,
  Filter,
  Grid3X3,
  List,
  MoreVertical,
  Calendar,
  Database,
  Download,
  Trash2,
  Eye,
  Settings,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

interface Dataset {
  id: string
  name: string
  records: number
  columns: number
  size: string
  lastModified: string
  status: 'clean' | 'pending' | 'processing' | 'error'
  source: string
  issues: number
}

const datasets: Dataset[] = [
  {
    id: '1',
    name: 'customer_data_2024.csv',
    records: 15420,
    columns: 12,
    size: '2.4 MB',
    lastModified: '2 hours ago',
    status: 'clean',
    source: 'CSV Upload',
    issues: 0,
  },
  {
    id: '2',
    name: 'sales_transactions.xlsx',
    records: 8932,
    columns: 18,
    size: '1.8 MB',
    lastModified: '5 hours ago',
    status: 'processing',
    source: 'Excel Upload',
    issues: 45,
  },
  {
    id: '3',
    name: 'product_inventory.json',
    records: 3241,
    columns: 8,
    size: '892 KB',
    lastModified: '1 day ago',
    status: 'pending',
    source: 'API Import',
    issues: 127,
  },
  {
    id: '4',
    name: 'user_analytics.csv',
    records: 52103,
    columns: 24,
    size: '8.1 MB',
    lastModified: '2 days ago',
    status: 'clean',
    source: 'CSV Upload',
    issues: 0,
  },
  {
    id: '5',
    name: 'marketing_leads.xlsx',
    records: 2847,
    columns: 15,
    size: '1.2 MB',
    lastModified: '3 days ago',
    status: 'error',
    source: 'Excel Upload',
    issues: 312,
  },
  {
    id: '6',
    name: 'supplier_contacts.csv',
    records: 891,
    columns: 10,
    size: '156 KB',
    lastModified: '1 week ago',
    status: 'clean',
    source: 'CSV Upload',
    issues: 0,
  },
]

const statusConfig = {
  clean: { label: 'Clean', className: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
  pending: { label: 'Pending', className: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
  processing: { label: 'Processing', className: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  error: { label: 'Error', className: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
}

export function DatasetsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDatasets = datasets.filter((dataset) =>
    dataset.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="My Datasets"
        description="Manage and clean your uploaded datasets."
      />

      <div className="p-6 space-y-6">
        {/* Filters and Search */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search datasets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="flex items-center border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-1.5 rounded transition-colors',
                  viewMode === 'list' ? 'bg-muted text-foreground' : 'text-muted-foreground'
                )}
              >
                <List className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-1.5 rounded transition-colors',
                  viewMode === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground'
                )}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Datasets List/Grid */}
        {viewMode === 'list' ? (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Name</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Records</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Columns</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Size</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Status</th>
                      <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Modified</th>
                      <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDatasets.map((dataset) => (
                      <tr key={dataset.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{dataset.name}</p>
                              <p className="text-xs text-muted-foreground">{dataset.source}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {dataset.records.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {dataset.columns}
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {dataset.size}
                        </td>
                        <td className="px-4 py-3">
                          <Badge className={statusConfig[dataset.status].className}>
                            {statusConfig[dataset.status].label}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">
                          {dataset.lastModified}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <Link to={`/dashboard/datasets/${dataset.id}`}>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDatasets.map((dataset) => (
              <Card key={dataset.id} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={statusConfig[dataset.status].className}>
                      {statusConfig[dataset.status].label}
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-3 truncate">{dataset.name}</CardTitle>
                  <CardDescription>{dataset.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Records</p>
                      <p className="font-medium text-foreground">{dataset.records.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Columns</p>
                      <p className="font-medium text-foreground">{dataset.columns}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Size</p>
                      <p className="font-medium text-foreground">{dataset.size}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Issues</p>
                      <p className={cn(
                        'font-medium',
                        dataset.issues > 0 ? 'text-destructive' : 'text-green-600 dark:text-green-400'
                      )}>
                        {dataset.issues}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                    <Link to={`/dashboard/datasets/${dataset.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Settings className="h-4 w-4" />
                      Clean
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
