import { DashboardHeader } from '../components/dashboard/header'
import { FileUploader } from '../components/dashboard/file-uploader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Database, FileSpreadsheet, FileJson, Globe } from 'lucide-react'

const dataSources = [
  {
    name: 'Database Connection',
    description: 'Connect to PostgreSQL, MySQL, or MongoDB',
    icon: Database,
    available: true,
  },
  {
    name: 'Google Sheets',
    description: 'Import directly from Google Sheets',
    icon: FileSpreadsheet,
    available: true,
  },
  {
    name: 'API Integration',
    description: 'Connect to REST or GraphQL APIs',
    icon: Globe,
    available: true,
  },
  {
    name: 'JSON/XML Files',
    description: 'Upload structured data files',
    icon: FileJson,
    available: true,
  },
]

export function UploadPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Upload Data" 
        description="Import your data from files or connect to external sources."
      />
      
      <div className="p-6 space-y-6">
        <FileUploader />

        <Card>
          <CardHeader>
            <CardTitle>Other Data Sources</CardTitle>
            <CardDescription>
              Connect to databases, APIs, or import from cloud services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dataSources.map((source) => (
                <button
                  key={source.name}
                  className="flex items-center gap-4 rounded-lg border border-border p-4 text-left transition-colors hover:bg-muted/50 hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <source.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{source.name}</p>
                    <p className="text-xs text-muted-foreground">{source.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
