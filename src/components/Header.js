import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

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
/*{({ isActive }) => (isActive ? 'active' : '')} */
/* className={(stateLink) => { console.log(stateLink); // Affiche l'objet complet dans la console return stateLink.isActive ? 'active' : ''; }}  */
