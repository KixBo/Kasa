import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AccommodationSheet from "../pages/AccommodationSheet";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";

function AppRouter() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodationsheet/:id" element={<AccommodationSheet />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
