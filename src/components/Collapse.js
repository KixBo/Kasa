import "../styles/Collapse.scss";
import icon from "../assets/dropdownicon.svg";
import { useState } from "react";

function Collapse({ title, content }) {
  // state (état, données)
  const [isOpen, setOpen] = useState(false);

  // comportements

  // affichage (render)
  return (
    <>
      <div className="collapseContainer">
        <div className="collapseTitle">
          <h3>{title}</h3>
          <img className={`icon ${isOpen && "rotation"}`}
            onClick={() => {
              setOpen(!isOpen);
            }}
            src={icon}
            alt="Icone d'ouverture/fermeture de l'accordéon"
          />
        </div>
        <div className={`collapseContent ${isOpen ? "visible" : "invisible"}`}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default Collapse;
