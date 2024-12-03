import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logoHeader.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1>
        <img src={logoHeader} alt="Logo de Kasa" className="logo" />
      </h1>
      <nav>
        <ul className="headerUl">
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
