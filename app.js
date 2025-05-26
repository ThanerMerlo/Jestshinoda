let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07, 
    "GBP": 0.87   
};

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}


function fromDollarToYen(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}


function fromYenToPound(yen) {
    const euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};