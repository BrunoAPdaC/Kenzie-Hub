import styled from "styled-components";

export const StyledDash = styled.div`
  background: #121214;
  border-radius: 8px;
  height: 100vh;

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
    div {
      width: 78%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 13px;

        width: 80px;
      }
      img {
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
        }
        h6 {
          margin: 0;
          width: 290px;
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
