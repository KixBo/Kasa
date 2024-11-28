import "../styles/Collapse.scss";
import icon from "../assets/dropdownicon.svg";
import { useState } from "react";

function Collapse({ title, content, style }) {
  // state (état, données)
  const [isOpen, setOpen] = useState(false);

  // comportements

  // affichage (render)
  return (
    <>
      <div className={`collapseContainer ${style === "accommodationSheetStyle" ? "accommodationShhetStyle" : ""}`}>
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
          {content}
        </div>
      </div>
    </>
  );
}

export default Collapse;
