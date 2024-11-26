import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/accommodations.json";
import "../styles/home.scss";
import { Link } from "react-router-dom";

function Home() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <>
      <Banner className="bannerHome">
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="cardsContainer">
        {data.map((accommodation) => {
          return (
            <Link to="/accommodationsheet" className="cardLink">
              <Card key={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
