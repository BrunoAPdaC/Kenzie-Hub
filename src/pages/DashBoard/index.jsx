import { useContext, useEffect, useState } from "react";
import { StyledDash } from ".";
import logo from "../../assets/img/Logo.svg";
import mais from "../../assets/img/mais.svg";

import { AuthContext } from "../../Providers/Context";

export function RouteDash() {
  const { logoutUser, authUser, descriptionUser } = useContext(AuthContext);

  useEffect(() => {
    authUser();
  }, []);

  return (
    <StyledDash>
      <nav>
        <div>
          <img src={logo} alt="logo" />
          <button onClick={logoutUser}>Sair</button>
        </div>
      </nav>
      <header>
        <div>
          <h3>Olá, {descriptionUser && descriptionUser.data.name}</h3>
          <h6>{descriptionUser && descriptionUser.data.course_module}</h6>
        </div>
      </header>
      <main>
        <div>
          <h4>Tecnologias</h4>
          <img src={mais} alt="" />
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </StyledDash>
  );
}
