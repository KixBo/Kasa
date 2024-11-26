import "../styles/Slideshow.scss";
import nextbtn from "../assets/nextbtn.svg";
import previousbtn from "../assets/previousbtn.svg";
import { useState } from "react";

function Slideshow({ pictures, title }) {
  // state (état, données)
  const hidenElement = pictures.length === 1 && "hidden";

  const [currentIndex, setCurrentIndex] = useState(0);

  // comportements
  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // affichage (render)
  return (
    <>
      <div className="carousel">
        <img src={pictures[currentIndex]} alt={`Logement : ${title}`} className="carouselPicture" />
        <button onClick={prevImage} className={`prevBtn ${hidenElement}`}>
          <img src={previousbtn} alt="Bouton précédent" />
        </button>
        <button onClick={nextImage} className={`nextBtn ${hidenElement}`}>
          <img src={nextbtn} alt="Bouton suivant" />
        </button>
        <span className={`carouselIndex ${hidenElement}`}>{`${currentIndex + 1}/${pictures.length}`}</span>
      </div>
    </>
  );
}

export default Slideshow;
