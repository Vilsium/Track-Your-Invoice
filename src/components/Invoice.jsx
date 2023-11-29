import image from "./invoice.png";

function Invoice() {
    return (
        <div>
            <img id="invoice" src={image} alt="Invoice" />
        </div>
    );
}

export default Invoice;