import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthComponent from './components/auth/Auth'
import PrivateRoutes from './protectedRoute'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
              <Route path='/' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<AuthComponent />}/>
        </Routes>
    </Router>
  )
}

export default App
