import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});



export async function getCachedData(key, fetchFunction, ttl = 86400) {
  try {
    const cached = await redis.get(key);
    
    if (cached) {
      return cached;
    }
    
    const freshData = await fetchFunction();
    
    await redis.setex(key, ttl, JSON.stringify(freshData));
    
    return freshData;
  } catch (error) {
    console.error('Redis error:', error);
    return await fetchFunction();
  }
}