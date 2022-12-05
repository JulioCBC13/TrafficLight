//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Luces from "./component/Luces.js";


function Semaforo  ()  {
    const colors = ["red","yellow","green"];
    const [ lit, setLit] = useState("red");

    return (
        <div className="semaforo">
            <div id="trafficTop"></div>
            <div id="container">
            {colors.map((color) => {
                return <Luces color={color} lit={lit} setLit={setLit}/>
            })}
            </div>
            
        </div>
    )
}


//render your react application
ReactDOM.render(<Semaforo />, document.querySelector("#app"));
