const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('One euro should be 1.07 dollars', () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745, 3);
});

test('100 USD should be approximately 14626.16 YEN', () => {
    expect(fromDollarToYen(100)).toBeCloseTo(14626.16, 1);
});

test('1000 YEN should be approximately 5.56 GBP', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2);
});