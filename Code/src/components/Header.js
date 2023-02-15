import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link, useNavigate } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/about">About</Link>
        </div>

        <div>
          <Link to="/contact">Contact</Link>
        </div>

        <div>Cart</div>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
};

export default Header;
