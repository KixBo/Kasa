import AppRouter from "./components/router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  // state (état, données)

  // comportements

  // affichage (render)
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
