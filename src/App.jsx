import GlobalStyle from "./styles/global.js";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [descriptionUser, setDescriptionUser] = useState(null);

  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain setDescriptionUser={setDescriptionUser} descriptionUser={descriptionUser} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
