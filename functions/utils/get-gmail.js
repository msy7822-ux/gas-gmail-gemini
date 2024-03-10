"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGmail = void 0;
const googleapis_1 = require("googleapis");
const google_apis_1 = require("../lib/google-apis");
const set_google_credential_1 = require("./set-google-credential");
const getGmail = async ({ token }) => {
    try {
        (0, set_google_credential_1.setGoogleCredential)(token);
        const gmail = googleapis_1.google.gmail({ version: 'v1', auth: google_apis_1.oauth2Client });
        const res = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 10,
        });
        const messages = res.data.messages;
        if (!messages)
            return null;
        const message = await gmail.users.messages
            .get({
            userId: 'me',
            id: messages[0].id,
        })
            .then(response => response.data);
        return message;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
exports.getGmail = getGmail;
