import "./Collapse.scss";
import icon from "../assets/dropdownicon.svg";
import { useState } from "react";

function Collapse({ title, content, styleAboutCollapseTitle, styleAboutCollapseContent }) {
  // state (état, données)
  const [isOpen, setOpen] = useState(false);

  // comportements

  // affichage (render)
  return (
    <>
      <div className={`collapseTitle ${styleAboutCollapseTitle}`}>
        <h3>{title}</h3>
        <img
          className={`icon ${isOpen && "rotation"}`}
          onClick={() => {
            setOpen(!isOpen);
          }}
          src={icon}
          alt="Icone d'ouverture/fermeture de l'accordéon"
        />
      </div>
      <div className={`collapseContent ${isOpen ? "visible" : "invisible"} ${styleAboutCollapseContent}`}>{content}</div>
    </>
  );
}

export default Collapse;
