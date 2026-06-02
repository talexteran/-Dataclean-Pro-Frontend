import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DashboardHeader } from '../components/dashboard/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import {
  ArrowLeft,
  Download,
  Play,
  Settings,
  AlertTriangle,
  CheckCircle,
  Copy,
  AlertCircle,
  FileText,
  Wand2,
} from 'lucide-react'
import { cn } from '../lib/utils'

// Sample data for preview
const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@email.com', phone: '+1-555-0123', date: '2024-01-15', status: 'Active' },
  { id: 2, name: 'jane doe', email: 'JANE@EMAIL.COM', phone: '555.0124', date: '15/01/2024', status: 'active' },
  { id: 3, name: 'John Doe', email: 'john@email.com', phone: null, date: '2024-01-15', status: 'Active' },
  { id: 4, name: 'Bob Smith', email: 'bob@example', phone: '+1-555-0125', date: 'Jan 16, 2024', status: 'Inactive' },
  { id: 5, name: null, email: 'alice@email.com', phone: '+1-555-0126', date: '2024-01-17', status: 'Active' },
  { id: 6, name: 'Charlie Brown', email: 'charlie@email.com', phone: '+1-555-0127', date: '2024-01-18', status: 'ACTIVE' },
]

const columns = ['id', 'name', 'email', 'phone', 'date', 'status']

const issues = [
  { type: 'duplicate', column: 'email', count: 1, description: 'Duplicate email found' },
  { type: 'null', column: 'name', count: 1, description: 'Missing name value' },
  { type: 'null', column: 'phone', count: 1, description: 'Missing phone number' },
  { type: 'format', column: 'email', count: 1, description: 'Invalid email format' },
  { type: 'format', column: 'date', count: 3, description: 'Inconsistent date formats' },
  { type: 'case', column: 'status', count: 3, description: 'Inconsistent case in status' },
  { type: 'case', column: 'name', count: 1, description: 'Inconsistent name casing' },
]

const cleaningRules = [
  { id: 'duplicates', name: 'Remove Duplicates', description: 'Remove duplicate rows based on key columns', enabled: true },
  { id: 'nulls', name: 'Handle Null Values', description: 'Fill or remove rows with missing values', enabled: true },
  { id: 'format', name: 'Standardize Formats', description: 'Normalize dates, phones, and emails', enabled: true },
  { id: 'case', name: 'Fix Text Case', description: 'Standardize text casing across columns', enabled: false },
  { id: 'trim', name: 'Trim Whitespace', description: 'Remove leading/trailing spaces', enabled: true },
  { id: 'outliers', name: 'Detect Outliers', description: 'Flag statistical anomalies', enabled: false },
]

const issueTypeConfig = {
  duplicate: { icon: Copy, color: 'text-orange-500' },
  null: { icon: AlertCircle, color: 'text-red-500' },
  format: { icon: FileText, color: 'text-blue-500' },
  case: { icon: AlertTriangle, color: 'text-yellow-500' },
}

export function DatasetDetailPage() {
  const { id } = useParams()
  const [rules, setRules] = useState(cleaningRules)
  const [isProcessing, setIsProcessing] = useState(false)

  const toggleRule = (ruleId: string) => {
    setRules(rules.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ))
  }

  const runCleaning = () => {
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 3000)
  }

  const getCellClass = (column: string, value: unknown) => {
    if (value === null) return 'bg-red-500/10 text-red-600 dark:text-red-400'
    if (column === 'email' && typeof value === 'string' && !value.includes('.')) return 'bg-yellow-500/10'
    if (column === 'date' && typeof value === 'string' && !value.match(/^\d{4}-\d{2}-\d{2}$/)) return 'bg-blue-500/10'
    return ''
  }

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Dataset Details"
        description="Preview, analyze, and clean your data."
      />

      <div className="p-6 space-y-6">
        {/* Back Button & Actions */}
        <div className="flex items-center justify-between">
          <Link to="/dashboard/datasets">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Datasets
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button 
              className="gap-2" 
              onClick={runCleaning}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Settings className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Run Cleaning
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Data Preview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Data Preview</CardTitle>
                    <CardDescription>Showing first 6 rows of customer_data_2024.csv</CardDescription>
                  </div>
                  <Badge variant="secondary">15,420 rows</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        {columns.map((col) => (
                          <th key={col} className="text-left font-medium text-muted-foreground px-4 py-2 border-b border-border">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          {columns.map((col) => (
                            <td 
                              key={col} 
                              className={cn(
                                'px-4 py-2 border-b border-border font-mono text-xs',
                                getCellClass(col, row[col as keyof typeof row])
                              )}
                            >
                              {row[col as keyof typeof row] === null ? (
                                <span className="text-red-500">NULL</span>
                              ) : (
                                String(row[col as keyof typeof row])
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-red-500/10 border border-red-500/30" />
                    Null values
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-yellow-500/10 border border-yellow-500/30" />
                    Format issues
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-blue-500/10 border border-blue-500/30" />
                    Inconsistent format
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Issues Found */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Issues Found
                </CardTitle>
                <CardDescription>
                  {issues.length} data quality issues detected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {issues.map((issue, idx) => {
                    const config = issueTypeConfig[issue.type as keyof typeof issueTypeConfig]
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-lg border border-border p-3"
                      >
                        <div className={cn('shrink-0', config.color)}>
                          <config.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {issue.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Column: {issue.column} | Occurrences: {issue.count}
                          </p>
                        </div>
                        <Badge variant="secondary">{issue.type}</Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cleaning Rules */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Cleaning Rules
                </CardTitle>
                <CardDescription>
                  Select which cleaning operations to apply
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {rules.map((rule) => (
                    <label
                      key={rule.id}
                      className={cn(
                        'flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors',
                        rule.enabled 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-muted-foreground/50'
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={rule.enabled}
                        onChange={() => toggleRule(rule.id)}
                        className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{rule.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {rule.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Dataset Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Rows</span>
                    <span className="text-sm font-medium text-foreground">15,420</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Columns</span>
                    <span className="text-sm font-medium text-foreground">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Null Values</span>
                    <span className="text-sm font-medium text-destructive">234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duplicates</span>
                    <span className="text-sm font-medium text-destructive">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Data Quality</span>
                    <span className="text-sm font-medium text-yellow-600">78%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[78%] bg-yellow-500 rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
