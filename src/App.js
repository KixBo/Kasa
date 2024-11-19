import "./styles/App.scss";
import AppRooter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <AppRooter />
      <Footer />
    </div>
  );
}

export default App;
