import { Navigate,useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuthentication = true
    const location = useLocation()
  return (
    isAuthentication ? <Outlet/> : <Navigate to="/" state={{from:location}} replace/>
  )
}

export default ProtectedRoute
