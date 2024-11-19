import "../styles/footer.scss";
import logoFooter from "../assets/logoFooter.svg";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;