import {
  handleAuth,
  handleCallback,
  Session,
  handleLogin,
  handleLogout,
} from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: { [key: string]: any } | undefined
) => {
  if (session) {
    res.setHeader('Location', '/');
  }
  return session;
};

function getUrls(req: NextApiRequest) {
  const host = req.headers['host'];
  const protocol = process.env.VERCEL_URL ? 'https' : 'http';
  const redirectUri = `${protocol}://${host}/api/auth/callback`;
  const returnTo = `${protocol}://${host}`;
  const logoutUrl = `${protocol}://${host}`;
  return {
    redirectUri,
    returnTo,
    logoutUrl,
  };
}

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri } = getUrls(req);
      await handleCallback(req, res, {
        afterCallback,
        redirectUri: redirectUri,
      });
    } catch (error: any) {
      res.status(error.status || 500).end(error.message);
    }
  },
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri, returnTo } = getUrls(req);

      await handleLogin(req, res, {
        authorizationParams: {
          redirect_uri: redirectUri,
        },
        returnTo: returnTo,
      });
    } catch (error: any) {
      res.status(error.status || 400).end(error.message);
    }
  },

  async logout(req: NextApiRequest, res: NextApiResponse) {
    const { logoutUrl } = getUrls(req);
    await handleLogout(req, res, {
      returnTo: logoutUrl,
    });
  },
});
