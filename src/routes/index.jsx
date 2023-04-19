import { Route, Routes } from "react-router-dom";
import { RouteHome } from "../pages/Home/index.jsx";
import { RouteRegister } from "../pages/Register/index.jsx";
import { RouteDash } from "../pages/DashBoard/index.jsx";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<RouteHome />} />
      <Route path="/register" element={<RouteRegister />} />

      <Route path="/dashboard" element={<RouteDash />} />
    </Routes>
  );
}
