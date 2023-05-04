import { createClient } from "redis";

const createClientObj = {
  socket: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379", 10),
    tls: false, // this should be set to true in deployed environments
  },
  username: process.env.REDIS_USER || "",
  password: process.env.REDIS_PASSWORD || "",
};

const client = createClient(createClientObj);

export const connect = async () => await client.connect();
export default client;