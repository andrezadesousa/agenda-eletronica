import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

interface AuthContextType {
  signed: boolean;
  loading: boolean;
}

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { signed, loading } = useContext(AuthContext) as AuthContextType;

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to="/" />;
  }

  return children;
}
