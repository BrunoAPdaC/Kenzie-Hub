import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalNew } from "../../pages/DashBoard";

const schema = z.object({
  title: z.string().nonempty("Nome é obrigatório "),
  status: z.string().nonempty("Status é obrigatório "),
});

export function ModalRegister({ handleRegister, closeModalNew }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <ModalNew className="modalNew">
      <span>
        <h2>Cadastrar Tecnologia</h2>
        <h6 onClick={closeModalNew}>X</h6>
      </span>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label>Nome</label>
        <input type="text" placeholder="Digite aqui o nome" {...register("title")} />
        <p>{errors.title?.message}</p>

        <label>Selecionar status</label>
        <select name="" id="" required {...register("status")}>
          <option value="">Selecione um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button>Cadastrar Tecnologia</button>
      </form>
    </ModalNew>
  );
}
