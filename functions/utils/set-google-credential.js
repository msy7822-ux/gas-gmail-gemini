"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGoogleCredential = void 0;
const google_apis_1 = require("../lib/google-apis");
const setGoogleCredential = async (token) => {
    google_apis_1.oauth2Client.setCredentials({
        refresh_token: token,
    });
};
exports.setGoogleCredential = setGoogleCredential;
