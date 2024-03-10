"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("@google-cloud/functions-framework");
const get_google_auth_code_1 = require("./utils/get-google-auth-code");
const get_google_refresh_token_1 = require("./utils/get-google-refresh-token");
const set_google_credential_1 = require("./utils/set-google-credential");
const get_gmail_1 = require("./utils/get-gmail");
functions.http('api', async (req, res) => {
    const arg = req.query.arg;
    const code = req.query.code;
    const token = req.query.token;
    if (!!code) {
        const token = await (0, get_google_refresh_token_1.getGoogleRefreshToken)(code);
        if (!token.access_token)
            throw new Error('Invalid access token');
        (0, set_google_credential_1.setGoogleCredential)(token.access_token);
        res.status(200).send({ token: token.access_token });
        return;
    }
    if (arg === 'auth') {
        const url = (0, get_google_auth_code_1.getGoogleAuthCode)();
        res.redirect(url ?? '');
        return;
    }
    if (!token)
        throw new Error('Invalid token');
    const message = await (0, get_gmail_1.getGmail)({ token });
    console.log('Message:', message);
});
