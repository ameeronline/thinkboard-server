    import {RateLimit} from 'express-rate-limit';
    import {Redis} from '@upstash/redis';
    import dotenv from 'dotenv';

    dotenv.config();


    const rateLimit = RateLimit({
        redis: Redis.fromEnv(),
        limiter: RateLimit.slidingWindow(10,"20 seconds")
    })

    export default rateLimit;