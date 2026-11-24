import {defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars( {
    MONGODB_URI: {},
    BETTER_AUTH_URL: {public:true},
    BETTER_AUTH_SECRET: {}
})