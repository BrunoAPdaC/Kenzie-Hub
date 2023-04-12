import styled from "styled-components";

export const HomeStyle = styled.div`
  background: #121214;
  border-radius: 8px;
  width: 100vw;
  height: 675px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding-top: 5rem;
    margin-bottom: 1rem;
  }
  div {
    background: #212529;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    padding-bottom: 2rem;
    width: 285px;

    h3 {
      padding-left: 7rem;
      font-weight: 700;
      font-size: 14.439px;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #f8f9fa;
    }

    p {
      font-weight: 600;
      font-size: 11px;
      color: #868e96;
      margin-top: 1.5rem;
      padding-left: 3.5rem;
      margin-bottom: 1rem;
    }

    a {
      display: flex;
      background: #868e96;
      color: #f8f9fa;
      font-weight: 500;
      font-size: 12.8347px;
      border: 1.2182px solid #868e96;
      border-radius: 4px;
      width: 93%;
      padding: 0.5rem 0;
      cursor: pointer;
      justify-content: center;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: start;
      h6 {
        color: red;
        font-size: 12px;
      }
      label {
        font-weight: 400;
        font-size: 12px;
        color: #f8f9fa;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
      input {
        background: #343b41;
        border: 0.9772px solid #f8f9fa;
        border-radius: 3.20867px;
        padding: 0.5rem;
        width: 95%;
        color: #f8f9fa;
        outline: none;
        ::placeholder {
          color: #868e96;
          font-weight: 400;
          font-size: 12.9865px;
        }
      }
      button {
        background: #ff577f;
        border: 1.2182px solid #ff577f;
        border-radius: 4.06066px;
        font-weight: 500;
        font-size: 12.8347px;
        color: #ffffff;
        margin-top: 1rem;
        padding: 0.5rem 6.7rem;
        cursor: pointer;
      }
    }
  }
  @media (min-width: 768px) {
    height: 100vh;
  }
`;
