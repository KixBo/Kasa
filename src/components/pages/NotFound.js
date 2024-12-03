import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h2 className="errorNumber">404</h2>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="toHomeLink">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;
