import { Link, useNavigate } from "react-router-dom";
import { HomeStyle } from ".";
import logo from "../../assets/img/Logo.svg";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export function RouteHome({ setDescriptionUser }) {
  const schema = z.object({
    email: z.string().nonempty("Email obrigatório"),
    password: z.string().nonempty("Senha obrigatória"),
  });

  const navigate = useNavigate();

  async function loginUser(data) {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TokenUser", response.data.token);
      toast.success("Usuário logado");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Deu erro");
    }
  }
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
