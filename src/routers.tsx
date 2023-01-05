import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./urls";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/login/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={NonAuthRoutes.loginPage} element={<LoginPage />} />
          <Route path={AuthRoutes.dashboard} element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default Routers;
