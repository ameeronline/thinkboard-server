    import {Ratelimit} from '@upstash/ratelimit';
    import {Redis} from '@upstash/redis';
    import dotenv from 'dotenv';

    dotenv.config();


    const ratelimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(20,"20s")
    })

    export default ratelimit;