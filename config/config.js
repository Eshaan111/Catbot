require('dotenv').config();

const config = {
    port: parseInt(process.env.PORT) || 3000,
    apiKey: process.env.TENOR_API_KEY,
    searchLimit: parseInt(process.env.SEARCH_LIMIT) || 50,
    discordApi: process.env.DISCORD_API_KEY,
    discordBotToken: process.env.DISCORD_BOT_TOKEN,
};

module.exports = config;
