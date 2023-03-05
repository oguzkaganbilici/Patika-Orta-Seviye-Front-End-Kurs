import React from "react";
function Header({number, data, increament}){
    console.log("rendered")
    return(
        <>
        <h1>Header-{number}</h1>
        <code>
            {JSON.stringify(data)}
        </code>

        <br></br>
        <br></br>
        <button onClick={increament}>Arttir</button>
        </>
    )
}

export default React.memo(Header);