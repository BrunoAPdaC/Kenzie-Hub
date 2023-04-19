import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AuthContext } from "./Context";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { token, setTechs, techs } = useContext(AuthContext);
  const [descriptionModal, setDescriptionModal] = useState([]);
  const [modalNewTech, setModalNewTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);

  function closeModalNew() {
    setModalNewTech(false);
  }

  function closeEditModal() {
    setDescriptionModal([]);
    setModalEditTech(false);
  }

  async function handleRegisterEdit(data, id) {
    try {
      const response = await api.put(`/users/techs/${id}`, data, { headers: { Authorization: ` Bearer ${token}` } });
      const newList = techs.filter((current) => current.id !== id);
      const newCurrent = [...newList, response.data];
      setTechs(newCurrent);
      toast.success("Tecnologia Editada com sucesso");
      closeEditModal();
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleRegister(data) {
    try {
      const response = await api.post("/users/techs", data, { headers: { Authorization: ` Bearer ${token}` } });
      const newTech = [...techs, response.data];
      setTechs(newTech);
      toast.success("Tecnologia adicionado com sucesso");
      closeModalNew();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/users/techs/${id}`, { headers: { Authorization: ` Bearer ${token}` } });
      const newList = techs.filter((current) => current.id !== id);
      setTechs(newList);
      toast.success("Tecnologia deletada com sucesso");
      closeEditModal();
    } catch (error) {}
  }

  return (
    <TechContext.Provider
      value={{
        handleRegisterEdit,
        handleRegister,
        handleDelete,
        descriptionModal,
        setDescriptionModal,
        closeEditModal,
        closeModalNew,
        setModalNewTech,
        modalNewTech,
        setModalEditTech,
        modalEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
