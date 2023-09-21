import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const afterCallback = (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state: { [key: string]: any } | undefined
) => {
  if (session) {
    res.setHeader('Location', '/dashboard/auth');
  }
  return session;
};

function getUrls(req: NextApiRequest) {
  const host = req.headers['host'];
  const protocol = process.env.VERCEL_URL ? 'https' : 'http';
  const redirectUri = `${protocol}://${host}/api/auth/callback`;
  return {
    redirectUri,
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
});
