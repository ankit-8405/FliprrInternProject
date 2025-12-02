import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import OfferingDetail from './pages/OfferingDetail'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageOfferings from './pages/admin/ManageOfferings'
import ManageSubscribers from './pages/admin/ManageSubscribers'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offering/:id" element={<OfferingDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/offerings" element={
          <ProtectedRoute>
            <ManageOfferings />
          </ProtectedRoute>
        } />
        <Route path="/admin/subscribers" element={
          <ProtectedRoute>
            <ManageSubscribers />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
