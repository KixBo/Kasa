import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logoHeader.svg";
import "./Header.scss";

function Header() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <header className="header">
      <img src={logoHeader} alt="Logo de Kasa" className="logo"/>
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
