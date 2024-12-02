import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

function Layout() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <>
      <div className="appContainer">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
