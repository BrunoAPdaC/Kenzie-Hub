import styled from "styled-components";

export const StyledDash = styled.div`
  background: #121214;
  border-radius: 8px;
  height: 1000px;

  nav {
    padding: 2rem 0 1rem 0;
    display: flex;
    justify-content: center;
    div {
      display: flex;
      justify-content: space-between;
      width: 80%;
      img {
      }
      button {
        background: #212529;
        border-radius: 4px;
        color: #f8f9fa;
        border: transparent;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
    }
  }
  header {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 2px solid #212529;
    border-bottom: 2px solid #212529;
    display: flex;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      width: 250px;

      h3 {
        color: #f8f9fa;
        font-weight: 700;
        font-size: 18px;
      }
      h6 {
        color: #868e96;
        font-weight: 400;
        font-size: 12px;
        margin-top: 1rem;
      }
    }
  }
  main {
    color: #f8f9fa;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
      width: 80%;
      display: flex;
      justify-content: space-between;

      h4 {
        font-size: 13px;

        width: 80px;
      }
      img {
        cursor: pointer;
        background: #212529;
        border-radius: 4px;
        padding: 0.4rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 80%;
      background: #212529;
      border-radius: 4px;
      padding: 1rem 0.5rem;
      margin-top: 1rem;
      gap: 1rem;
    }
    li {
      display: flex;
      justify-content: space-between;
      background: #121214;
      border-radius: 4.06066px;
      padding: 0.8rem 1rem;
      h5 {
        min-width: 100px;
      }
      p {
        font-weight: 400;
        font-size: 12.182px;
        color: #868e96;
      }
      :hover {
        background: #343b41;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 375px) {
    nav {
      div {
        width: 250px;
      }
    }
    header {
    }
    main {
      div {
        width: 250px;
      }
      ul {
        width: 250px;
      }
    }
  }
  @media (min-width: 425px) {
    header {
    }
    main {
    }
  }
  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: center;
      div {
        width: 60%;
        img {
          width: 120px;
        }
      }
    }
    header {
      display: flex;
      justify-content: center;
      div {
        width: 60%;
        display: flex;
        justify-content: space-between;
        h3 {
          width: 170px;
        }
        h6 {
          margin: 0;
          width: 250px;
          font-size: 14px;
        }
      }
    }
    main {
      display: flex;
      justify-content: center;
      div {
        display: flex;
        width: 60%;
        h4 {
          width: 40%;
          font-size: 16px;
        }
        h6 {
          width: 75%;
          font-size: 14px;
        }
      }
      ul {
        width: 60%;
      }
    }
  }
  @media (min-width: 1024px) {
    header {
      div {
        flex-direction: row;
      }
    }
  }
  @media (min-width: 1440px) {
    height: 100vw;
    nav {
      div {
      }
    }
    header {
    }
    main {
    }
  }
`;

export const ModalNew = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 296px;

  top: 150px;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  padding-bottom: 1.5rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    padding: 0.7rem 1rem;
    width: 100%;
    margin-bottom: 1rem;
    h2 {
      width: 132px;
      font-weight: 700;
      font-size: 12px;
    }
    h6 {
      width: 10px;
      color: #868e96;
      font-size: 12px;
      cursor: pointer;
    }
  }
  form {
    height: 100%;
    p {
      font-size: 12px;
      padding-left: 1.1rem;
      color: red;
      margin-bottom: 1rem;
    }
    label {
      font-weight: 400;
      font-size: 12.182px;
      margin-top: 1rem;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
    input {
      background: #343b41;
      border: 0.973899px solid #343b41;
      border-radius: 3.19783px;
      color: #868e96;
      padding: 0.5rem;
      margin-left: 1rem;
      margin-bottom: 1rem;

      width: 90%;
      outline: none;
      margin-top: 1rem;
      ::placeholder {
        color: rgb(134, 142, 150);
      }
    }
    select {
      background: #343b41;
      border: 0.973899px solid #343b41;
      border-radius: 3.19783px;
      color: #868e96;
      padding: 0.5rem;
      margin-left: 1rem;
      width: 90%;
      outline: none;
      margin-top: 1rem;
    }
    button {
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      background: #ff577f;
      font-weight: 500;
      font-size: 12.8347px;
      color: #ffffff;
      width: 90%;
      margin-left: 1rem;
      margin-top: 1rem;
      padding: 0.7rem;
      cursor: pointer;
    }
    .buttons {
      width: 90%;
      margin-left: 1rem;
      margin-top: 1rem;
      align-items: center;
      display: flex;
      justify-content: space-between;

      button {
        border: 1.2182px solid #59323f;
        border-radius: 4px;
        background: #59323f;
        color: #ffffff;
        font-weight: 500;
        font-size: 12.7913px;
        padding: 0.5rem 1rem;
        margin: 0;
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
      p {
        border: 1.2182px solid #868e96;
        border-radius: 4px;
        background: #868e96;
        padding: 0.5rem 1rem;
        color: #ffffff;
        font-weight: 500;
        font-size: 12.7913px;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    width: 369px;
    .buttons {
      width: 90%;
    }
  }
`;
