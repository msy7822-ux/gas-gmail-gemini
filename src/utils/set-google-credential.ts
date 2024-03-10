import { oauth2Client } from '../lib/google-apis';

export const setGoogleCredential = async (token: string) => {
  oauth2Client.setCredentials({
    refresh_token: token,
  });
};
