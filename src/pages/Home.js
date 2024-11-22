import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/accommodations.json";
import "../styles/home.scss"

function Home() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <div>
      <Banner />
      <div className="cardsContainer">
        {data.map((accommodation) => {
          return <Card key={accommodation.id} accommodation={accommodation} />
        })}
      </div>
    </div>
  );
}

export default Home;
