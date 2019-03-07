"use strict";

const { TransportRegistry } = require("./transportRegistry");

class CodeUp {
    constructor() {
        this.transportRegistry = new TransportRegistry();
        this.transportRegistry.loadTransports();
    }

    async upload(transport, code, options) {
        return transport.run(code, options);
    }
}

module.exports = new CodeUp();
module.exports.CodeUp = CodeUp;