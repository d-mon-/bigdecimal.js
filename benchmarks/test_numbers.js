const { Big } = require('big.js');
const { BigDecimal } = require('../lib/big_decimal.js');
const { BigDecimal: GWTDecimal } = require('bigdecimal');

const bigDecimalNumbers = [
    '11231231.232323', '1222235657.2312', '1222235657.2312', '1222235632257.23124',
    '1222235223657.231245', '1222231235657.2312456', '122223565237.23222124567', '12222232335657.231245678',
    '1222235657.2312999456789'
]

const bigDecimals = [] // for BigDecimal.js
const bigDecimalsBigjs = [] // for big.js
const bigDecimalsGWT = [] // for gwt based bigdecimal

for (const x of bigDecimalNumbers) {
    bigDecimals.push(BigDecimal.fromValue(x));
}
for (const x of bigDecimalNumbers) {
    bigDecimalsBigjs.push(new Big(x));
}
for (const x of bigDecimalNumbers) {
    bigDecimalsGWT.push(GWTDecimal(x));
}

const smallDecimalNumbers = [
    '0.1', '0.12', '0.123', '0.1234', '0.12345', '0.123456', '0.1234567', '0.12345678', '0.123456789'
]

const smallDecimals = [] // for BigDecimal.js
const smallDecimalsBigjs = [] // for big.js
const smallDecimalsGWT = [] // for gwt based bigdecimal

for (const x of smallDecimalNumbers) {
    smallDecimals.push(BigDecimal.fromValue(x));
}
for (const x of smallDecimalNumbers) {
    smallDecimalsBigjs.push(new Big(x));
}
for (const x of smallDecimalNumbers) {
    smallDecimalsGWT.push(GWTDecimal(x));
}

module.exports = {
    bigDecimals: bigDecimals,
    bigDecimalsBigjs: bigDecimalsBigjs,
    bigDecimalsGWT: bigDecimalsGWT,
    smallDecimals: smallDecimals,
    smallDecimalsBigjs: smallDecimalsBigjs,
    smallDecimalsGWT: smallDecimalsGWT,
}
