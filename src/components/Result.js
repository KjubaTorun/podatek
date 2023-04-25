import React from "react";

function Result(props){
    return(
        <div>
            <h2>Wynagrodzenie netto:</h2>
            <p>{props.netto} zł</p>
        </div>
    )
}

export default Result;