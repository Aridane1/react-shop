import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);
  const [menuBars, setMenuBars] = useState(false);

  const isOpen = () => {
    setMenu(!menu);
    setMenuBars(!menuBars);
  };

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
      <div className={`header-nav ${menu ? "isActive" : ""} ` }>
        <ul>
          <li className="header-li">
            <a href="/home" className="header-a">
              Home
            </a>
            <a href="/products" className="header-a">
              Productos
            </a>
            <a href="/shopping-cat" className="header-a">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
