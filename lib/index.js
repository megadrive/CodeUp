"use strict";

class CodeUp {
    async run(transport, code, options) {
        return transport.run(code, options);
    }
}

module.exports = new CodeUp();
module.exports.CodeUp = CodeUp;