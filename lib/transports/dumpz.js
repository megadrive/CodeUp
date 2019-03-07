"use strict";

const axios = require("axios");

/**
 * https://dumpz.org/help/api
 * 
 * 
 * 
 * @returns {string} The resultant URL.
 */

const lexers = {
  "js": "javascript"
}

const baseUrl = "https://dumpz.org/api/dump";
module.exports.run = async (code, options) => {
  try {
    const args = [];
    // TODO: Find out what lexers dumpz has.
    // if (options.filetype) args.push(`lexer=${lexers[options.filetype.toLowerCase()]}`);

    const {
      data: {
        url
      }
    } = await axios.post(`${baseUrl}?${args.join("&")}`, code);

    return url;
  } catch (err) {
    console.error(err.response.statusText + ": " + err.response.data.error);
  }
}