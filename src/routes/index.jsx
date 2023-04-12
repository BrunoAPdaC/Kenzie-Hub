import { Route, Routes } from "react-router-dom";
import { RouteHome } from "../pages/Home/index.jsx";
import { RouteRegister } from "../pages/Register/index.jsx";
import { RouteDash } from "../pages/DashBoard/index.jsx";

export function RoutesMain({ setDescriptionUser, descriptionUser }) {
  return (
    <Routes>
      <Route path="/" element={<RouteHome setDescriptionUser={setDescriptionUser} />} />
      <Route path="/register" element={<RouteRegister />} />
      <Route
        path="/dashboard"
        element={<RouteDash descriptionUser={descriptionUser} setDescriptionUser={setDescriptionUser} />}
      />
    </Routes>
  );
}
