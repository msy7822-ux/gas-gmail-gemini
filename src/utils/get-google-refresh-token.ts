import { oauth2Client } from '../lib/google-apis';

export const getGoogleRefreshToken = async (code: string) => {
  // 認証コードをトークンに交換
  const { tokens } = await oauth2Client.getToken(code);
  console.log('Tokens:', tokens);
  return tokens;
};
