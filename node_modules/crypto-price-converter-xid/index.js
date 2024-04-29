// index.js

const axios = require('axios');

/**
 * Convert cryptocurrency prices between different currencies.
 * @param {string} fromCurrency - The source cryptocurrency symbol.
 * @param {string} toCurrency - The target currency symbol.
 * @returns {Promise<number>} The converted price.
 */
async function convertCryptoCurrencyPriceXid(fromCurrency, toCurrency) {
    try {
        const response = await axios.get(`https://api.coinbase.com/v2/prices/${fromCurrency}-${toCurrency}/buy`);
        const price = response.data.data.amount;
        return parseFloat(price);
    } catch (error) {
        throw new Error('Unable to fetch cryptocurrency price.');
    }
}

module.exports = convertCryptoCurrencyPriceXid;
