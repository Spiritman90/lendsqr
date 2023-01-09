import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div style={{ marginLeft: "17.6875rem", marginTop: "6.25rem" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
