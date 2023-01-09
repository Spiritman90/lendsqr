import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./urls";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/Login";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import Dashboard from "./pages/DashBoard";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={NonAuthRoutes.loginPage} element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path={AuthRoutes.dashboard} element={<Dashboard />} />
            <Route path={AuthRoutes.users} element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default Routers;
