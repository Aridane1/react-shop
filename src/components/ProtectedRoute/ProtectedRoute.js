import { useAuth } from "../../context/authContext";
import { Navigate } from "react-router-dom";
import "./protectedroute.css"
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="loading">
        <h1>
          <p>Loading</p>
        </h1>
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
