import * as redis from 'redis';

const redisClient = redis.createClient();

(async () => {
  redisClient.on('error', (err) => console.log('Redis Client Error', err));
  redisClient.on('ready', () => console.log('Redis is ready'));
  await redisClient.connect();
})();

export default redisClient;
