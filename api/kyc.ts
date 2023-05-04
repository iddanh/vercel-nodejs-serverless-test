import type { VercelRequest, VercelResponse } from '@vercel/node'
import redisClient, { connect } from "../src/redis-client.js";

connect();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const kycOptions = await redisClient.json.get("kyc:options");
  res.json(kycOptions);
}
