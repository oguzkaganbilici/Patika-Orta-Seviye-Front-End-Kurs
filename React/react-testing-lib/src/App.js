import Counter from "./components/counter";
import "./styles.css";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <ToDo />
    </div>
  );
}
