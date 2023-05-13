import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/authContext";

import { useEffect, useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  const [menuBars, setMenuBars] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async (e) => {
    await logout();
  };

  const isOpen = () => {
    setMenu(!menu);
    setMenuBars(!menuBars);
  };

  const checkIfUserIsLoggedIn = () => {
    if (user) {
      console.log("User is signed in.");
      console.log(user.email);
      setUserLogin(true);
    } else {
      console.log("No user is signed in.");
      setUserLogin(false);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  },[user]);

  return (
    <div className="header">
      <div className="button-menu">
        <button onClick={isOpen} className="button-nav">
          <FontAwesomeIcon
            icon={faBars}
            className={`faBars ${menuBars ? "isClicked" : ""} `}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className={`faXmark ${menuBars ? "isClicked" : ""} `}
          />
        </button>
      </div>
      <div className="header-logo">
        <img
          src="/assents/logo/DISTRIBUCIONES-AGRICOLAS.svg"
          alt="logo"
          width="150"
          height="150"
        />
      </div>
      <div className={`header-nav ${menu ? "isActive" : ""} `}>
        <ul>
          <li className="header-li">
            <a href="/home" className="header-a">
              Home
            </a>
            <a href="/products" className="header-a">
              Productos
            </a>
            <a href="/shopping-cart" className="header-a">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a
              href="/login"
              className={`header-a sign-in ${userLogin ? "isLogin" : "isNotLogin"}`}
            >
              Login
            </a>
            <a
              href="/register"
              className={`header-a sign-up ${userLogin ? "isLogin" : "isNotLogin"}`}
            >
              SingUp
            </a>
            <a
              href="/home"
              onClick={handleLogout}
              className={`header-a sign-out ${userLogin ? "isLogin" : "isNotLogin"}`}
            >
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
