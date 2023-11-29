import React from "react";
import image from "./TYI-logo.jpeg";

function Logo() {
    return (
        <div>
            <header>
                <img id="logoImage" src={image} alt="Logo" />
            </header>
        </div>
    );
}

export default Logo;