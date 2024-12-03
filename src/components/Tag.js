import "./Tag.scss";

function Tag({ tagName }) {
  return (
    <div className="tag">
      <p>{tagName}</p>
    </div>
  );
}

export default Tag;
