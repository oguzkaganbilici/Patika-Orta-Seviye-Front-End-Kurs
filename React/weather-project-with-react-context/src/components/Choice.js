import CityTheme from "../context/CityContext";
import Form from "react-bootstrap/Form";

export default function Choice() {
  const { theCity, setCity } = CityTheme();

  function handleChange(e) {
    setCity(e.target.value);
  }
  return (
    <>
      <Form.Select
        aria-label="Default select example"
        value={theCity}
        onChange={handleChange}
      >
        <option value="Ordu">Ordu</option>
        <option value="Samsun">Samsun</option>
        <option value="Konya">Konya</option>
        <option value="Ankara">Ankara</option>
        <option value="Erzurum">Erzurum</option>
        <option value="Konya">Konya</option>
        <option value="Paris">Paris</option>
        <option value="London">Londra</option>
        <option value="Adana">Adana</option>
        <option value="Budapest">Budapeşte</option>
        <option value="Bangkok">Bangkok</option>
      </Form.Select>
    </>
  );
}
