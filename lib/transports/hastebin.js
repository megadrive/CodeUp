"use strict";

const axios = require("axios");

/**
 * curl \
 *   -d "hello this is a <paste>" \
 *   -H "Content-Type: text/plain" \
 *   https://hastebin/documents
 * 
 * @returns {string} The resultant URL.
 */

const baseUrl = "https://hastebin.com";
module.exports.run = async (code) => {
    try {
        const {
            data: {
                key
            }
        } = await axios.post(baseUrl + "/documents", code, {
            headers: {
                "Content-Type": "text/plain"
            }
        });

        return `${baseUrl}/${key}`;
    } catch (err) {
        console.error(err.response.statusText);
    }
}