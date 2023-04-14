import { Link, useNavigate } from "react-router-dom";
import { HomeStyle } from ".";
import logo from "../../assets/img/Logo.svg";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useContext } from "react";

import { AuthContext } from "../../Providers/Context";

const schema = z.object({
  email: z.string().nonempty("Email obrigatório"),
  password: z.string().nonempty("Senha obrigatória"),
});
export function RouteHome() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <HomeStyle>
      <img src={logo} alt="logo" />
      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(loginUser)}>
          <label>Email</label>
          <input type="email" placeholder="Digite aqui seu email" {...register("email")} />
          <h6>{errors.email?.message}</h6>

          <label>Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
          <h6>{errors.password?.message}</h6>
          <button>Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </HomeStyle>
  );
}
