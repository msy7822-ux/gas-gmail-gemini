"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleRefreshToken = void 0;
const google_apis_1 = require("../lib/google-apis");
const getGoogleRefreshToken = async (code) => {
    const { tokens } = await google_apis_1.oauth2Client.getToken(code);
    console.log('Tokens:', tokens);
    return tokens;
};
exports.getGoogleRefreshToken = getGoogleRefreshToken;
