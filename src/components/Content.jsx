import React from "react";
import Points from "./Points";

function Content() {
    return (
        <div className="content">
            <p id="firstPara" className="contentPara">
                Welcome to Track Your Invoices, simplifying your billing process with our intuitive software integrated with WhatsApp, i.e., sending your bills to customers or vendors WhatsApp embracing paperless future and experience invoicing at your fingertips.
            </p>
            <p id="secondPara" className="contentPara">
                Why should you use our software ? Well here are some points :
            </p>
            <Points />
        </div>
    );
}

export default Content;