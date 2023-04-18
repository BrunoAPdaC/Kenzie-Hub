import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [descriptionUser, setDescriptionUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const token = localStorage.getItem("@TokenUser");
  const navigate = useNavigate();

  async function loadUser() {
    try {
      const response = await api.get("/profile", { headers: { Authorization: ` Bearer ${token}` } });

      setDescriptionUser(response);
    } catch (error) {}
  }

  async function loginUser(data) {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TokenUser", response.data.token);
      toast.success("Usuário logado");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Deu erro no login");
    }
  }

  async function authUser() {
    const { sub } = jwtDecode(token);
    try {
      const response = await api.get(`/users/${sub}`);
      setTechs(response.data.techs);
      setDescriptionUser(response);
    } catch (error) {}
  }

  function logoutUser() {
    setDescriptionUser(null);
    localStorage.removeItem("@TokenUser");
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
    loadUser();
  }, []);
  console.log(techs);

  return (
    <AuthContext.Provider value={{ descriptionUser, loadUser, loginUser, token, logoutUser, authUser, techs }}>
      {children}
    </AuthContext.Provider>
  );
}
