import "../styles/card.scss";

function Card({ cover, title }) {
// state (état, données)

// comportements

// affichage (render)
  return (
    <article className="cardContainer">
      <img className="cardCover" src={cover} alt={`Logement : ${title}`} />
      <h2 className="cardTitle">{title}</h2>
    </article>
  );
}

export default Card;