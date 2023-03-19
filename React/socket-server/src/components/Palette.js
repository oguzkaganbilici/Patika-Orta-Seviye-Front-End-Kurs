import { useState } from "react"
import { send } from "../socketAPI"

export default function Palette(){
    const [color, setColor] = useState("#000");

    function handleChange(e){
        setColor(e.target.value);
    }
    return(
        <div className="palette">
            <input type="color" onChange={handleChange} value={color}/>
            <button onClick={() => send(color)}>Send it</button>
        </div>
    )
}