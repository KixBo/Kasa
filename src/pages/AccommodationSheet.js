import { useParams } from "react-router-dom";
import data from "../data/accommodations.json";
import Slideshow from "../components/Slideshow";
import "../styles/AccommodationSheet.scss";

function AccommodationSheet() {
  // state (état, données)
  const { id } = useParams();
  let accommodation = [];
  for (const i of data) {
    if (id === i.id) {
      accommodation = i;
    }
  }

  // comportements

  // affichage (render)
  return (
    <>
      <div className="accommodationContainer">
        <Slideshow pictures={accommodation.pictures} title={accommodation.title} />
        <p>Ceci est l'id de mon logment : {accommodation.id}</p>
        <p>Ceci est le titre de mon logment : {accommodation.title}</p>
        <p>Ceci est la note de mon logment : {accommodation.rating}</p>
      </div>
    </>
  );
}

export default AccommodationSheet;
