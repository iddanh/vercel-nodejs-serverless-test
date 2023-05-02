import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from 'redis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT)
    }
  });

  await client.connect();

  const kycOptions = await client.json.get("kyc:options");
  res.json(kycOptions);
}
