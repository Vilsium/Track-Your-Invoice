import React from "react";

function Navigation() {
    return (
        <div>
            <a id="linkNameFirst" href="#">Home</a>
            <a className="linkName" href="#">About</a>
            <a className="linkName" href="#">Clients</a>
            <a className="linkName" href="#">Contact</a>
        </div>
    );
}

export default Navigation;