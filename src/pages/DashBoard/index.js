import styled from "styled-components";

export const StyledDash = styled.div`
  background: #121214;
  border-radius: 8px;
  height: 100vh;

  nav {
    display: flex;
    justify-content: center;
    gap: 6rem;
    padding: 2rem 0 1rem 0;

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
  header {
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    border-top: 2px solid #212529;
    border-bottom: 2px solid #212529;
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
  main {
    color: #f8f9fa;
    padding-left: 2rem;
    margin-top: 2rem;
    h4 {
      font-size: 13px;
      margin-bottom: 1rem;
      width: 250px;
    }
    h6 {
      width: 260px;
    }
  }

  @media (min-width: 375px) {
    header {
      padding-left: 4rem;
    }
    main {
      padding-left: 4rem;
    }
  }
  @media (min-width: 425px) {
    header {
      padding-left: 5rem;
    }
    main {
      padding-left: 5rem;
    }
  }
  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: center;
      gap: 18rem;
      img {
        width: 120px;
      }
    }
    header {
      display: flex;
      justify-content: space-between;
      padding-left: 9.5rem;
      padding-right: 10rem;
      align-items: center;
      gap: 3rem;

      h3 {
        width: 120px;
      }
      h6 {
        margin: 0;
        width: 290px;
        font-size: 14px;
      }
    }
    main {
      padding-left: 9.5rem;

      h4 {
        width: 100%;
        font-size: 16px;
      }
      h6 {
        width: 75%;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 1024px) {
    nav {
      padding-left: 15rem;
      padding-right: 15rem;
    }
    header {
      padding-left: 17.5rem;
      padding-right: 17.5rem;
    }
    main {
      padding-left: 17.7rem;
      h6 {
        width: 62%;
      }
    }
  }
  @media (min-width: 1440px) {
    height: 100vw;
    nav {
      gap: 28rem;
    }
    header {
      padding-left: 25.5rem;
      padding-right: 25.2rem;
    }
    main {
      padding-left: 26rem;
    }
  }
`;
