import "../styles/Slideshow.scss";
import nextbtn from "../assets/nextbtn.svg";
import previousbtn from "../assets/previousbtn.svg";

function Slideshow({ pictures, title }) {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <>
      <div className="carousel">
        <img src={pictures[0]} alt={`Photo du logement : ${title}`} className="carouselPicture" />
        <button className="prevBtn">
          <img src={previousbtn} alt="Bouton précédent" />
        </button>
        <button className="nextBtn">
          <img src={nextbtn} alt="Bouton suivant" />
        </button>
        <span className="carouselIndex">1/4</span>
      </div>
    </>
  );
}

export default Slideshow;
