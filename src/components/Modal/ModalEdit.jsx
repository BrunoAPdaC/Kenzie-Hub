import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalNew } from "../../pages/DashBoard";
const schema = z.object({
  status: z.string().nonempty("Status é obrigatório "),
});

export function ModalEdit({ handleEdit, closeEditModal, handleDelete, descriptionModal }) {
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
        <h2>Tecnologia Detalhes</h2>
        <h6 onClick={closeEditModal}>X</h6>
      </span>
      <form onSubmit={handleSubmit(handleEdit)}>
        <label>Nome do Projeto</label>
        <input type="text" value={descriptionModal.title} readOnly />

        <label>Status</label>
        <select name="" id="" required {...register("status")}>
          <option value="">Selecione um status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="buttons">
          <button type="submit">Salvar alterações</button>
          <p onClick={() => handleDelete(descriptionModal.id)}>Excluir</p>
        </div>
      </form>
    </ModalNew>
  );
}
