import { useEffect, useState } from 'react';
import './App.css';
import Palette from './components/Palette';
import { init, subs } from "./socketAPI";



function App() {

  const [color, setColor] = useState("#282c34");


  useEffect(() =>{
    init();
    subs((colr) =>{
      setColor(colr)
    });
  }, [])


  return (
      <div className='App' style={{backgroundColor:color }}>
        {color}
        <Palette />
      </div>
  );
}

export default App;
