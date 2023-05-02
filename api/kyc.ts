import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from 'redis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const client = createClient({
    password: 'fOeUIS7HWAy7rbsECJQcuQn5HdjB1bvJ',
    socket: {
      host: 'redis-18236.c13378.us-east-1-mz.ec2.cloud.rlrcp.com',
      port: 18236
    }
  });

  await client.connect();

  const kycOptions = await client.json.get("kyc:options");
  res.json(kycOptions);
}
