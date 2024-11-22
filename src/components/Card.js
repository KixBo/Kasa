import "../styles/card.scss";

function Card(props) {
// state (état, données)

// comportements

// affichage (render)
  return (
    <article className="cardContainer">
      <img className="cardCover" src={props.accommodation.cover} alt={`Image du logement : ${props.accommodation.title}`} />
      <h2 className="cardTitle">{props.accommodation.title}</h2>
    </article>
  );
}

export default Card;