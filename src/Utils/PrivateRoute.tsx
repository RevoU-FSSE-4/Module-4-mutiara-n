import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const isLogin = localStorage.getItem('token') !== null;
    return isLogin ? <Outlet /> : <Navigate to="/login" />
}