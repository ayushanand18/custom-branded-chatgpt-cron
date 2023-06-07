// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.js

const { schedule } = require("@netlify/functions");

const handler = async function(event, context) {
    await fetch('https://custom-branded-chatgpt-api.onrender.com/test')
    console.log('Received event:', event);

    return {
        statusCode: 200,
    };
};

exports.handler = schedule("*/15 * * * *", handler);
