import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Home from './screens/Home/Home';
import Register from './screens/Register/Register';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/register" />;
    }

    return <>{children}</>;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default AppRoutes; 