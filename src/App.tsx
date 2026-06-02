import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/landing'
import { LoginPage } from './pages/login'
import { SignupPage } from './pages/signup'
import { DashboardLayout } from './pages/dashboard-layout'
import { DashboardPage } from './pages/dashboard'
import { UploadPage } from './pages/upload'
import { DatasetsPage } from './pages/datasets'
import { DatasetDetailPage } from './pages/dataset-detail'
import { SettingsPage } from './pages/settings'

function App() {
  return (
    <BrowserRouter>
      <div className="dark">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="datasets" element={<DatasetsPage />} />
            <Route path="datasets/:id" element={<DatasetDetailPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
