import { google } from 'googleapis';
import { oauth2Client } from '../lib/google-apis';
import { setGoogleCredential } from './set-google-credential';

export const getGmail = async ({ token }: { token: string }) => {
  try {
    setGoogleCredential(token);
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const res = await gmail.users.messages.list({
      userId: 'me', // 自分自身
      maxResults: 10, // 最大取得数
    });

    const messages = res.data.messages;
    if (!messages) return null;

    // 最初のメールの詳細を取得
    const message = await gmail.users.messages
      .get({
        userId: 'me',
        id: messages[0].id!,
      })
      .then(response => response.data);
    return message;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
