import "./Banner.scss";

function Banner({ children, className }) {
  // state (état, données)

  // comportements

  // affichage (render)
  return <div className={`banner ${className}`}>{children}</div>;
}

export default Banner;
