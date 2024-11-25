import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/accommodations.json";
import "../styles/home.scss";

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
          return <Card key={accommodation.id} accommodation={accommodation} />;
        })}
      </div>
    </>
  );
}

export default Home;
