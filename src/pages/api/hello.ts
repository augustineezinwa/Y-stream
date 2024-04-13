import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Hello World' });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}

export default handler;
