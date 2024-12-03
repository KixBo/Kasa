import "./Collapse.scss";
import icon from "../assets/dropdownicon.svg";
import { useState } from "react";

function Collapse({ title, content }) {
  // State pour ouvrir ou fermer le collapse
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapseContainer">
      <div className="collapseTitle">
        {title}
        <img
          className={`icon ${isOpen && "rotation"}`}
          onClick={() => {
            setOpen(!isOpen);
          }}
          src={icon}
          alt="Icone d'ouverture/fermeture de l'accordéon"
        />
      </div>
      <div className={`collapseContent ${isOpen ? "visible" : "invisible"}`}>{content}</div>
    </div>
  );
}

export default Collapse;
