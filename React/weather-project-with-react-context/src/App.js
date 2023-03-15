import Cards from "./components/Cards";
import Header from "./components/Header";
import { CityProvider } from "./context/CityContext";
import {} from "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <CityProvider>
          <Header />
          <Cards />
        </CityProvider>
      </div>
    </>
  );
}
