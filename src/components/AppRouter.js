import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AccommodationSheet from "../pages/AccommodationSheet";
import NotFound from "../pages/NotFound";

function AppRouter() {
// state (état, données)

// comportements

// affichage (render)
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodationsheet" element={<AccommodationSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRouter;
