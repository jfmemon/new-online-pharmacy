import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isAdmin) {
        return children;
    }

    if (isAdminLoading || loading) {
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;