import React from "react";



const Luces = ({color,lit,setLit}) => {
    return (
        <div>
            <div className="light" style={{ backgroundColor: color == lit ? color: "grey"}} onClick={() => setLit(color)}></div>
        </div>
    )
}

export default Luces;
