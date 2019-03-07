"use strict";

const {
    readdir
} = require("mz/fs");
const {
    join
} = require("path");

class TransportRegistry {
    constructor() {
        this.transports = {};
    }

    /**
     * Whether a transport exists.
     * @returns boolean
     */
    exists(transportName) {
        return Object.keys(this.transports).some(key => transportName === key);
    }

    /**
     * Loads transports.
     * @returns Promise<{}>
     */
    async loadTransports() {
        try {
            const files = await readdir(join(__dirname, "transports"));

            files.forEach(file => {
                if (file.endsWith(".js")) {
                    const key = file.split(".")
                        .slice(0, -1)
                        .join(".");

                    this.transports[key] = require(join(__dirname, "transports", file))
                }
            })
        } catch (err) {
            console.error("Could not load transports.", err);
        }

        return this.transports;
    };
}

module.exports = new TransportRegistry();
module.exports.TransportRegistry = TransportRegistry;