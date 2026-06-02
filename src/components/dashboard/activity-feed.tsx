import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const activities = [
  {
    id: 1,
    action: 'Cleaned dataset',
    target: 'customer_data_2024.csv',
    time: '2 hours ago',
    details: 'Removed 234 duplicates',
  },
  {
    id: 2,
    action: 'Uploaded file',
    target: 'sales_transactions.xlsx',
    time: '5 hours ago',
    details: '8,932 records imported',
  },
  {
    id: 3,
    action: 'Exported data',
    target: 'product_inventory.json',
    time: '1 day ago',
    details: 'Downloaded as CSV',
  },
  {
    id: 4,
    action: 'Applied rules',
    target: 'user_analytics.csv',
    time: '2 days ago',
    details: 'Format standardization',
  },
  {
    id: 5,
    action: 'Fixed issues',
    target: 'inventory_q4.xlsx',
    time: '3 days ago',
    details: '156 null values handled',
  },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest data cleaning operations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="relative flex gap-4">
                {/* Timeline dot */}
                <div className="relative z-10 flex h-4 w-4 items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                
                <div className="flex-1 min-w-0 -mt-0.5">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.action}</span>
                    {' '}
                    <span className="text-muted-foreground">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {activity.details}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
