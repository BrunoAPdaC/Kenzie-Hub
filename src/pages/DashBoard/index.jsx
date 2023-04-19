import { useContext, useEffect, useState } from "react";
import { ModalNew, StyledDash } from ".";
import logo from "../../assets/img/Logo.svg";
import mais from "../../assets/img/mais.svg";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../Providers/Context";
import { TechContext } from "../../Providers/TechContext";
import { ModalRegister } from "../../components/Modal/ModalRegister";
import { ModalEdit } from "../../components/Modal/ModalEdit";

export function RouteDash() {
  const { logoutUser, authUser, descriptionUser, techs, token, setTechs } = useContext(AuthContext);
  const {
    handleRegister,
    handleRegisterEdit,
    handleDelete,
    descriptionModal,
    setDescriptionModal,
    closeEditModal,
    closeModalNew,
    modalEditTech,
    setModalEditTech,
    modalNewTech,
    setModalNewTech,
  } = useContext(TechContext);

  useEffect(() => {
    authUser();
  }, []);

  function openEditModal(current) {
    setDescriptionModal(current);

    setModalEditTech(true);
  }

  function openModalNew() {
    setModalNewTech(true);
  }

  async function handleEdit(data) {
    await handleRegisterEdit(data, descriptionModal.id);
  }

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
          <img src={mais} alt="" onClick={openModalNew} />
        </div>
        {modalNewTech === true ? <ModalRegister handleRegister={handleRegister} closeModalNew={closeModalNew} /> : null}
        {modalEditTech === true ? (
          <ModalEdit
            handleEdit={handleEdit}
            closeEditModal={closeEditModal}
            handleDelete={handleDelete}
            descriptionModal={descriptionModal}
          />
        ) : (
          ""
        )}
        <ul>
          {techs.map((current) => {
            return (
              <li key={current.id} onClick={() => openEditModal(current)}>
                <h5>{current.title}</h5>
                <p>{current.status}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </StyledDash>
  );
}
