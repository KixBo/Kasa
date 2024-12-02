import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <div className="notFondContainer">
      <p className="errorNumber">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="homeNavlink">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;
