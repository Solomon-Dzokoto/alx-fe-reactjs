import { Navigate,useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const ProtectedRoute = () => {
    const location = useLocation()
    const isAuthentication = useAuth()
  return (
    isAuthentication ? <Outlet/> : <Navigate to="/" state={{from:location}} replace/>
  )
}
export default ProtectedRoute
