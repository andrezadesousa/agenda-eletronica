import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUserInfo() {
      const userStorageInfo = localStorage.getItem("userInfo");

      if (userStorageInfo) {
        setUserInfo(JSON.parse(userStorageInfo));
        setLoading(false);
      }

      setLoading(false);
    }

    loadUserInfo();
  }, []);

  const signIn = async (email, password) => {
    setLoadingAuth(true);
    try {
      const { data } = await axios.post("http://localhost:5050/login", {
        email,
        password,
      });

      setUserInfo(data);
      setLoadingAuth(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/home");
    } catch (error) {
      alert(error.response.data.message);
      setLoadingAuth(false);
      console.error(error);
    }
  };

  const logout = () => {
    setUserInfo(null);
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!userInfo,
        userInfo,
        loadingAuth,
        loading,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
