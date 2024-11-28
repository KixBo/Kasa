import { useParams, useNavigate } from "react-router-dom";
import data from "../data/accommodations.json";
import Slideshow from "../components/Slideshow";
import "../styles/AccommodationSheet.scss";
import starGrey from "../assets/stargrey.svg";
import starRed from "../assets/starred.svg";
import Collapse from "../components/Collapse";
import { useEffect } from "react";

function AccommodationSheet() {
  // state (état, données)
  const { id } = useParams();



  const navigate = useNavigate()

  const idArray = data.map((accommodation) => {
    return accommodation.id
  })

  useEffect(() => {
    if (!idArray.includes(id)) {
      navigate("/*");
    }
  }, [id]);

  if (!idArray.includes(id)) {
    return null
  }




  let accommodation = [];
  for (const i of data) {
    if (id === i.id) {
      accommodation = i;
    }
  }

  const equipmentList = (
    <ul>
      {accommodation.equipments.map((equipment) => {
        return <li>{equipment}</li>;
      })}
    </ul>
  );

  // comportements

  // affichage (render)
  return (
    <>
      <div className="accommodationContainer">
        <Slideshow pictures={accommodation.pictures} title={accommodation.title} />

        <div className="mainContainer">
          <div className="container1">
            <h2 className="accommodationTitle">{accommodation.title}</h2>
            <p className="accommodationLocation">{accommodation.location}</p>

            <div className="tagContainer">
              {accommodation.tags.map((tag) => {
                return (
                  <div className="tag">
                    <p>{tag}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="container2">
            <div className="hostContainer">
              <p className="hostName">{accommodation.host.name}</p>
              <div className="hostPictureContainer">
                <img src={accommodation.host.picture} alt={accommodation.host.name} className="hostPicture" />
              </div>
            </div>

            <div className="ratingsContainer">
              <img src={accommodation.rating >= 1 ? starRed : starGrey} alt="Icone de note ..." />
              <img src={accommodation.rating >= 2 ? starRed : starGrey} alt="Icone de note ..." />
              <img src={accommodation.rating >= 3 ? starRed : starGrey} alt="Icone de note ..." />
              <img src={accommodation.rating >= 4 ? starRed : starGrey} alt="Icone de note ..." />
              <img src={accommodation.rating >= 5 ? starRed : starGrey} alt="Icone de note ..." />
            </div>
          </div>
        </div>

        <div className="collapsesContainer">
          <Collapse title="Description" content={accommodation.description} style="accommodationSheetStyle" />
          <Collapse title="Équipements" content={equipmentList} style="accommodationSheetStyle" />
        </div>
      </div>
    </>
  );
}

export default AccommodationSheet;
