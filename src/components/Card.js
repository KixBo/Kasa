import "./Card.scss";

function Card({ cover, title }) {
  return (
    <article className="cardContainer">
      <img className="cardCover" src={cover} alt={`Logement : ${title}`} />
      <h3 className="cardTitle">{title}</h3>
    </article>
  );
}

export default Card;
