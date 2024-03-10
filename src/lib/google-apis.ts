import { google } from 'googleapis';

// OAuth2 クライアントを設定
export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID, // クライアントID
  process.env.GOOGLE_CLIENT_SECRET, // クライアントシークレット
  'https://us-central1-senren-claim-gmail.cloudfunctions.net/claim-gmail'
);
