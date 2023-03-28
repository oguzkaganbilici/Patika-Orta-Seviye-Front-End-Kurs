import React from "react";
export interface Button{
    type: string;
}

export default function Button({type} : Button){

    const buttonClass = "specialButtons " + type
    return(
        <>
            <button className={buttonClass} onClick={()=>alert(`clicked ${type}`)}>{type} Button</button>
            <br/><br/>
        </>
    )
} 