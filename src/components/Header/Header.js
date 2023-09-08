import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/authContext";

import { useEffect, useState } from "react";

export default function Header2() {
  const [userLogin, setUserLogin] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async (e) => {
    await logout();
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
  }, [user]);

  return (
    <>
      <header>
        <nav class="nav">
          <div class="nav-container">
            <h1 class="nav-logo">7 Islas</h1>

            <label htmlFor="menu" class="nav-label">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=" />
            </label>

            <input type="checkbox" id="menu" class="nav-input" />
            <div class="nav-menu">
              <a href="/home" className="nav-item">
                Home
              </a>
              <a href="/products" className="nav-item">
                Productos
              </a>
              <a href="/shopping-cart" className="nav-item">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a
                href="/login"
                className={`nav-item sign-in ${
                  userLogin ? "isLogin" : "isNotLogin"
                }`}
              >
                Login
              </a>
              <a
                href="/register"
                className={`nav-item sign-up ${
                  userLogin ? "isLogin" : "isNotLogin"
                }`}
              >
                SingUp
              </a>
              <a
                href="/home"
                onClick={handleLogout}
                className={`nav-item sign-out ${
                  userLogin ? "isLogin" : "isNotLogin"
                }`}
              >
                LogOut
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
