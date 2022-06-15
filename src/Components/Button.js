import React from "react";
import "../styleSheets/Button.css";

function Button({text, isButtonClick, manageClick})
{
    return (
        <button className={isButtonClick ? 'button-click' : 'restart-button'} onClick={manageClick}>
            {text}
        </button>
    );
}
export default Button;