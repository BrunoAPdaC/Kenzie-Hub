import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  background: #121214;
  border-radius: 8px;
  width: 100vw;
  height: 800px;
  header {
    display: flex;
    gap: 7rem;
    img {
    }
    a {
      color: #f8f9fa;
      background: #212529;
      border-radius: 4px;
      padding: 0.7rem 1.5rem;
      font-weight: 600;
      font-size: 10px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    margin-top: 2rem;
    padding-bottom: 2rem;
    width: 290px;
    h4 {
      color: #f8f9fa;
      font-weight: 700;
      font-size: 14.3916px;
      padding-top: 2rem;
      padding-left: 6rem;
      margin-bottom: 1rem;
    }
    p {
      color: #868e96;
      font-weight: 400;
      font-size: 9.59437px;
      padding-left: 5rem;
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      label {
        font-weight: 400;
        font-size: 12px;
        color: #f8f9fa;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      input {
        background: #343b41;
        border: 0.973988px solid #343b41;
        border-radius: 3.19812px;
        color: #868e96;
        padding: 0.5rem 0;
        padding-left: 0.5rem;
        outline: none;
      }
      select {
        background: #343b41;
        border: 0.973988px solid #343b41;
        border-radius: 3.19812px;
        color: #868e96;
        padding: 0.5rem 0;
        padding-left: 0.5rem;
        outline: none;
      }
      button {
        background: #59323f;
        border: 1.2182px solid #59323f;
        border-radius: 4px;
        color: #ffffff;
        font-weight: 500;
        font-size: 13px;
        margin-top: 1rem;
        padding: 0.5rem 0;
        cursor: pointer;
      }
      h6 {
        color: red;
      }
    }
  }
  @media (min-width: 768px) {
    height: 1000px;
  }
`;
