import { useContext, useEffect, useState } from "react";
import { ModalNew, StyledDash } from ".";
import logo from "../../assets/img/Logo.svg";
import mais from "../../assets/img/mais.svg";

import { AuthContext } from "../../Providers/Context";

export function RouteDash() {
  const { logoutUser, authUser, descriptionUser, techs } = useContext(AuthContext);
  const [modalNewTech, setModalNewTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);
  const [descriptionModal, setDescriptionModal] = useState([]);
  useEffect(() => {
    authUser();
  }, []);

  function openEditModal(current) {
    setDescriptionModal(current);
    setModalEditTech(true);
  }
  function closeEditModal(current) {
    setDescriptionModal([]);
    setModalEditTech(false);
  }

  function openModalNew() {
    setModalNewTech(true);
  }
  function closeModalNew() {
    setModalNewTech(false);
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
        {modalNewTech === true ? (
          <ModalNew className="modalNew">
            <span>
              <h2>Cadastrar Tecnologia</h2>
              <h6 onClick={closeModalNew}>X</h6>
            </span>

            <label>Nome</label>
            <input type="text" />

            <label>Selecionar status</label>
            <select name="" id="" required>
              <option value="">Selecione um status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </ModalNew>
        ) : null}
        {modalEditTech === true ? (
          <ModalNew className="modalNew">
            <span>
              <h2>Tecnologia Detalhes</h2>
              <h6 onClick={closeEditModal}>X</h6>
            </span>

            <label>Nome do Projeto</label>
            <input type="text" value={descriptionModal.title} />

            <label>Status</label>
            <select name="" id="" required value={descriptionModal.status}>
              <option value="">Selecione um status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <div>
              <button>Salvar alterações</button>
              <p>Excluir</p>
            </div>
          </ModalNew>
        ) : null}
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
