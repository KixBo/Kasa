import Banner from "../Banner";
import Card from "../Card";
import data from "../../data/accommodations.json";
import "./Home.scss";
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
            <Link key={accommodation.id} to={`/accommodationsheet/${accommodation.id}`} className="cardLink">
              <Card title={accommodation.title} cover={accommodation.cover} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
