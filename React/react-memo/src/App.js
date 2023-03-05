import './App.css';
import Header from './Components/Header';
import { useState, useMemo, useCallback } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  const [val, stateVal] = useState("");

  const data = useMemo(() =>(
    {"Oguz":26}
    ), []);

    //const data = calculate();

    const increase = useCallback(() => {
      setNumber((prev) => prev +1);
    },[])

  return (
    <div className="App">
      <Header number={number > 5 ? number : 0}  data={data} increament={increase} />
      <h1>{number}</h1>
      

      <br></br>
      <br></br>
      <input value={val} onChange={({target}) => (stateVal(target.value))}></input>
      <br></br>
      <br></br>
      <h1>{val}</h1>
    </div>
  );

  function calculate(){
    console.log("calculate has started");
    for(let i=0; i<1000000000000000; i++){}
    console.log("calculate done");
  }
}

export default App;
