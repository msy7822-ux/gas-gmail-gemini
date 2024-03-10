"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("@google-cloud/functions-framework");
functions.http('api', (req, res) => {
    res.status(200).send('tempura');
});
