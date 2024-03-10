import { oauth2Client } from '../lib/google-apis';

export const getGoogleAuthCode = () => {
  try {
    const scopes = ['https://www.googleapis.com/auth/gmail.readonly'];

    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
      // If you only need one scope you can pass it as a string
      scope: scopes,
      prompt: 'consent',
    });
    // コンソールにURLを表示して、アクセスし認証をしてもらう
    console.log('Authorize this app by visiting this url:', url);
    return url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
