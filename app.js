function convert() {
    let binaryValue = document.getElementById("no-of-input").value;
    // console.log(binaryValue);
    let decimalValue = parseInt(binaryValue, 2);
    // let decimaValue = parseInt(document.getElementById('convert-button').nodeValue, 2);
    return decimalValue;
}
