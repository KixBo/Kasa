import Banner from "../Banner";
import Card from "../Card";
import data from "../../data/accommodations.json";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Banner className="bannerHome">
        <h2 className="bannerText">Chez vous, partout et ailleurs</h2>
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
