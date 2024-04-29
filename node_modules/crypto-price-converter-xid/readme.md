# Crypto Price Converter

A simple npm module to convert cryptocurrency prices between different currencies.

## Installation

You can install the module via npm:

```bash
npm i crypto-price-converter-xid
```

## USAGE

```javascript
const convertCryptoCurrencyPrice = require('crypto-price-converter-xid');

convertCryptoCurrencyPrice('BTC', 'USD')
  .then(price => console.log(`1 BTC is currently worth $${price} USD`))
  .catch(err => console.error('Error:', err.message));
```
