import "../styles/footer.scss";
import logoFooter from "../assets/logoFooter.svg";

function Footer() {
// state (état, données)

// comportements

// affichage (render)
  return (
    <footer className="footer">
      <img className="footerLogo" src={logoFooter} alt="Logo de Kasa" />
      <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;