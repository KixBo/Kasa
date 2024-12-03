import { useParams } from "react-router-dom";
import data from "../../data/accommodations.json";
import Slideshow from "../Slideshow";
import "./AccommodationSheet.scss";
import starGrey from "../../assets/stargrey.svg";
import starRed from "../../assets/starred.svg";
import Collapse from "../Collapse";
import NotFound from "../pages/NotFound";
import Tag from "../Tag";

function AccommodationSheet() {
  // Récupère l'id du logement dans l'url
  const { id } = useParams();
  // Vérifie l'id et récupère le logement
  const accommodation = data.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <NotFound />;
  }

  return (
    <div className="accommodationContainer">
      <Slideshow pictures={accommodation.pictures} title={accommodation.title} />
      <div className="mainAccommodationInfoContainer">
        <div className="infoContainer1">
          <h2 className="accommodationTitle">{accommodation.title}</h2>
          <p className="accommodationLocation">{accommodation.location}</p>
          <div className="tagContainer">
            {accommodation.tags.map((tag) => {
              return <Tag key={tag} tagName={tag} />;
            })}
          </div>
        </div>
        <div className="infoContainer2">
          <div className="hostContainer">
            <p className="hostName">{accommodation.host.name}</p>
            <div className="hostPictureContainer">
              <img src={accommodation.host.picture} alt={accommodation.host.name} className="hostPicture" />
            </div>
          </div>
          <div className="ratingsContainer">
            <img className="star" src={accommodation.rating >= 1 ? starRed : starGrey} alt="Icone de note ..." />
            <img className="star" src={accommodation.rating >= 2 ? starRed : starGrey} alt="Icone de note ..." />
            <img className="star" src={accommodation.rating >= 3 ? starRed : starGrey} alt="Icone de note ..." />
            <img className="star" src={accommodation.rating >= 4 ? starRed : starGrey} alt="Icone de note ..." />
            <img className="star" src={accommodation.rating >= 5 ? starRed : starGrey} alt="Icone de note ..." />
          </div>
        </div>
      </div>
      <div className="accommodationPage accommodationCollapsesContainer">
        <Collapse title={<h3>Description</h3>} content={<p>{accommodation.description}</p>} />
        <Collapse
          title={<h3>Équipements</h3>}
          content={
            <ul>
              {accommodation.equipments.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default AccommodationSheet;
