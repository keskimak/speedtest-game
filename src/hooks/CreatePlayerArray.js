import React from "react";


function createPlayerArray  (buttonNumber) {
    const [playerArray, setPlayerArray] = React.useState([]);
    
    setPlayerArray([...playerArray, buttonNumber]);
    console.log(playerArray)

}

export { createPlayerArray }