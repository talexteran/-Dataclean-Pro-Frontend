import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
}

export function StatsCard({ title, value, change, changeType = 'neutral', icon: Icon }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className={cn(
            'text-xs mt-1',
            changeType === 'positive' && 'text-green-600 dark:text-green-400',
            changeType === 'negative' && 'text-destructive',
            changeType === 'neutral' && 'text-muted-foreground'
          )}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
