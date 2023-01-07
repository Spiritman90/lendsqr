import "./Modal.scss";
import EyeIcon from "../../assets/svgs/EyeIcon";
import BlacklistUserIcon from "../../assets/svgs/BlacklistUserIcon";
import ActivateUserIcon2 from "../../assets/svgs/ActivateUserIcon2";
const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__view-details">
          <EyeIcon />
          <p className="modal__text">View Details</p>
        </div>
        <div className="modal__blacklist-user">
          <BlacklistUserIcon />
          <p className="modal__text">Blacklist User</p>
        </div>
        <div className="modal__activate-user">
          <ActivateUserIcon2 />
          <p className="modal__text">Activate User</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
