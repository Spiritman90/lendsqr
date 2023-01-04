import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./urls";
import LoginPage from "./pages/LoginPage";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={NonAuthRoutes.loginPage} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
