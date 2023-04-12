import { useEffect, useState } from "react";
import { StyledDash } from ".";
import logo from "../../assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function RouteDash({ descriptionUser, setDescriptionUser }) {
  const token = localStorage.getItem("@TokenUser");
  const navigate = useNavigate();

  function logoutUser() {
    setDescriptionUser(null);
    localStorage.clear("@TokenUser");
    navigate("/");
  }
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get("/profile", { headers: { Authorization: ` Bearer ${token}` } });

        setDescriptionUser(response);
      } catch (error) {}
    }
    loadUser();
  }, []);

  return (
    <StyledDash>
      <nav>
        <img src={logo} alt="logo" />
        <button onClick={logoutUser}>Sair</button>
      </nav>
      <header>
        <h3>Olá, {descriptionUser && descriptionUser.data.name}</h3>
        <h6>{descriptionUser && descriptionUser.data.course_module}</h6>
      </header>
      <main>
        <h4>Que pena! Estamos em desenvolvimento :(</h4>
        <h6>Nossa aplicação está em desenvolvimento, em breve teremos novidades</h6>
      </main>
    </StyledDash>
  );
}
