import "./Footer.scss";
import logoFooter from "../../assets/logoFooter.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footerLogo" src={logoFooter} alt="Logo de Kasa" />
      <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
