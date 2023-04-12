import { Link, useNavigate } from "react-router-dom";
import { StyledRegister } from ".";
import logo from "../../assets/img/Logo.svg";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const schema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório "),
    email: z.string().nonempty("Email é obrigatório"),
    password: z.string().nonempty("Senha é obrigatório").min(8, "Mínimo de 8 caracteres"),
    confirm: z.string().nonempty("Confirmação de senha é obrigatório").min(8, "Mínimo de 8 caracteres"),

    bio: z.string().nonempty("Bio é obrigatório"),
    contact: z.string().nonempty("Contato é obrigatório"),
    course_module: z.string().nonempty("Módulo do curso é obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });

export function RouteRegister() {
  const navigate = useNavigate();
  async function handleRegister(data) {
    try {
      await api.post("/users", data);
      toast.success("Cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
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
    <StyledRegister>
      <header>
        <img src={logo} alt="logo" />
        <Link to="/">Voltar</Link>
      </header>
      <div>
        <h4>Crie sua conta</h4>
        <p>Rapido e grátis, vamos nessa </p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome aqui" {...register("name")} />
          <h6>{errors.name?.message}</h6>

          <label>Email</label>
          <input type="email" placeholder="Digite seu email aqui" {...register("email")} />
          <h6>{errors.email?.message}</h6>

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha aqui" {...register("password")} />
          <h6>{errors.password?.message}</h6>

          <label>Confirmar Senha</label>
          <input type="password" placeholder="Confirme sua senha aqui" {...register("confirm")} />
          <h6>{errors.confirm?.message}</h6>

          <label>Bio</label>
          <input type="text" placeholder="Fale sobre voce" {...register("bio")} />
          <h6>{errors.bio?.message}</h6>

          <label>Contato</label>
          <input type="text" placeholder="Opção de contato" {...register("contact")} />
          <h6>{errors.contact?.message}</h6>

          <label>Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="">Selecione seu módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
          </select>
          <h6>{errors.course_module?.message}</h6>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </StyledRegister>
  );
}
