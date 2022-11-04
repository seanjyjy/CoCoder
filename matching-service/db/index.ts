import * as redis from 'redis';

const url = process.env.REDIS_URL || 'redis://localhost:6379';

const redisClient = redis.createClient({ url });

(async () => {
  redisClient.on('error', (err) => console.log('Redis Client Error', err));
  redisClient.on('ready', () => console.log('Redis is ready'));
  await redisClient.connect();
})();

export default redisClient;
