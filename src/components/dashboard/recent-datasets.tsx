import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { FileText, MoreVertical, Calendar, Database } from 'lucide-react'

interface Dataset {
  id: string
  name: string
  records: number
  lastModified: string
  status: 'clean' | 'pending' | 'processing'
  source: string
}

const recentDatasets: Dataset[] = [
  {
    id: '1',
    name: 'customer_data_2024.csv',
    records: 15420,
    lastModified: '2 hours ago',
    status: 'clean',
    source: 'CSV Upload',
  },
  {
    id: '2',
    name: 'sales_transactions.xlsx',
    records: 8932,
    lastModified: '5 hours ago',
    status: 'processing',
    source: 'Excel Upload',
  },
  {
    id: '3',
    name: 'product_inventory.json',
    records: 3241,
    lastModified: '1 day ago',
    status: 'pending',
    source: 'API Import',
  },
  {
    id: '4',
    name: 'user_analytics.csv',
    records: 52103,
    lastModified: '2 days ago',
    status: 'clean',
    source: 'CSV Upload',
  },
]

const statusConfig = {
  clean: { label: 'Clean', variant: 'default' as const },
  pending: { label: 'Pending', variant: 'secondary' as const },
  processing: { label: 'Processing', variant: 'outline' as const },
}

export function RecentDatasets() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Datasets</CardTitle>
          <CardDescription>Your recently uploaded and processed files</CardDescription>
        </div>
        <Link to="/dashboard/datasets">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentDatasets.map((dataset) => (
            <div
              key={dataset.id}
              className="flex items-center gap-4 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {dataset.name}
                  </p>
                  <Badge variant={statusConfig[dataset.status].variant}>
                    {statusConfig[dataset.status].label}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Database className="h-3 w-3" />
                    {dataset.records.toLocaleString()} records
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {dataset.lastModified}
                  </span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
