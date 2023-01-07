import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
// import Modal from "../../components/modal/Modal";

const dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <SideBar />
      {/* <Modal /> */}
    </div>
  );
};

export default dashboard;
