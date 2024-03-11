import * as functions from '@google-cloud/functions-framework';
import { getGoogleAuthCode } from './utils/get-google-auth-code';
import { getGoogleRefreshToken } from './utils/get-google-refresh-token';
import { setGoogleCredential } from './utils/set-google-credential';
import { getGmail } from './utils/get-gmail';
// import { oauth2Client } from './lib/google-apis';
// import { Firestore } from '@google-cloud/firestore';

functions.http('api', async (req, res) => {
  const arg = req.query.arg;
  const code = req.query.code;
  const token = req.query.token as string;
  const isAuth = Boolean(req.query.auth);

  if (!!code) {
    const token = await getGoogleRefreshToken(code as string);
    if (!token.access_token) throw new Error('Invalid access token');

    setGoogleCredential(token.access_token);
    const redirectUrl = process.env.APP_URL + '?token=' + token.access_token;
    res.redirect(redirectUrl ?? '');
    return;
  }

  if (arg === 'auth') {
    const url = getGoogleAuthCode();
    res.redirect(url ?? '');
    return;
  }

  // NOTE: tokenはfirebaseなどの外部ストアに保存する

  if (!token) throw new Error('Invalid token');

  const message = await getGmail({ token });
  res.status(200).send({ message: 'message?.snippet' });
});
