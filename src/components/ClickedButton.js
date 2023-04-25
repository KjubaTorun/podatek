import React from "react";

function ClickedButton({handleButtonClick}){
    return(
        <button onClick={handleButtonClick}>
            Oblicz
        </button>
    )
}
export default ClickedButton;
