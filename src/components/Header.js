import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
