import "../styles/Collapse.scss";
import icon from "../assets/dropdownicon.svg";

function Collapse({ title, content }) {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <>
      <div className="collapseContainer">
        <div className="collapseTitle">
          <h3>{title}</h3>
          <img src={icon} alt="Icone d'ouverture/fermeture de l'accordéon" />
        </div>
        <div className="collapseContent">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default Collapse;
