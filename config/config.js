require('dotenv').config();

const config = {
    port: parseInt(process.env.PORT) || 3000,
    apiKey: process.env.API_KEY,
    searchLimit: parseInt(process.env.SEARCH_LIMIT) || 50,
};

module.exports = config;
