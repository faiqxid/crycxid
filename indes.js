// index.js

const convertCryptoCurrencyPrice = require('crypto-price-converter-xid');

convertCryptoCurrencyPrice('BTC', 'USD')
    .then(price => console.log(`1 BTC is currently worth $${price} USD`))
    .catch(err => console.error('Error:', err.message));
