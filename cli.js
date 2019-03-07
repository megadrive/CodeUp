#!/usr/bin/env node

const argv = require('yargs').argv;
const {
    readFile
} = require("mz/fs");
const {
    join
} = require("path");
const pkg = require("./package.json");

const codeup = require("./lib");

const errors = [];

;
(async () => {
    try {
        const transports = codeup.transportRegistry.transports;
        const transportExists = codeup.transportRegistry.exists(argv.transport);
        const file = argv._[0]; // first only
        const transport = argv.transport ? argv.transport : "hasteb.in";

        if (argv.version) {
            console.log(pkg.version);
            process.exit(0);
        }

        if (argv.list) {
            console.log("Available transports: " + Object.keys(transports).join(", "));
            process.exit(0);
        }

        if (!argv.transport) {
            if (argv.v) console.warn("No transport defined, using hasteb.in");
        } else if (!transportExists) {
            errors.push(`Need a defined transport (got ${argv.transport}): --transport <transportname>`);
        }

        if (!file) {
            errors.push("No file specified.");
        }

        if (errors.length) {
            errors.forEach(error => console.error("Error: " + error));
            process.exit(1);
        }

        const filepath = join(file);
        const code = await readFile(filepath, "utf8");

        const options = {
            filename: file,
            filetype: file.split(".").reverse()[0]
        };

        const finalisedUrl = await codeup.upload(transports[transport], code, options);

        console.log(finalisedUrl);
    } catch (err) {
        console.error(err);
    }
})();