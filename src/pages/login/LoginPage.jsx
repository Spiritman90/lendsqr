import "./LoginPage.scss";
import LoginImage from "../../assets/img/pablo-sign-in 1.jpg";
import Lendsqr from "../../assets/svgs/Lendsqr";
import Logo from "../../assets/svgs/Logo";
import ShowPasswordIcon from "../../assets/svgs/ShowPasswordIcon";
import { useState } from "react";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login">
      <div className="login__logo-box">
        <Logo />
        <Lendsqr />
      </div>

      <div className="login__image-wrapper">
        <img src={LoginImage} alt="login" className="login__photo" />
        <div className="login__text-wrapper">
          <h2 className="login__welcome">Welcome!</h2>
          <p className="login__details">Enter details to login.</p>

          <div className="login__info">
            <form className="login__form" onSubmit={handleSubmit}>
              <label className="login__label">
                <input
                  type="text"
                  placeholder="Email"
                  className="login__input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
              <label className="login__label">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login__input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </label>
              <div className="login__show" onClick={handleShowPassword}>
                <ShowPasswordIcon />
              </div>
              <p className="login__forgot-password">FORGOT PASSWORD?</p>
              <button type="submit" className="login__button">
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
