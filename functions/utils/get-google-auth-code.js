"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleAuthCode = void 0;
const google_apis_1 = require("../lib/google-apis");
const getGoogleAuthCode = () => {
    try {
        const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];
        const url = google_apis_1.oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
            prompt: 'consent',
        });
        console.log('Authorize this app by visiting this url:', url);
        return url;
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
exports.getGoogleAuthCode = getGoogleAuthCode;
