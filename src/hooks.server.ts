// BELOW is the prebuilt sveltekit version of this file if you add betterauth at setup
// import type { Handle } from '@sveltejs/kit/hooks';
// import { building } from '$app/env';
// import { auth } from '#lib/server/auth.ts';
// import { svelteKitHandler } from 'better-auth/svelte-kit';

// const handleBetterAuth: Handle = async ({ event, resolve }) => {
// 	const session = await auth.api.getSession({ headers: event.request.headers });

// 	if (session) {
// 		event.locals.session = session.session;
// 		event.locals.user = session.user;
// 	}

// 	return svelteKitHandler({ event, resolve, auth, building });
// };

// export const handle: Handle = handleBetterAuth;

import { auth } from "#lib/auth.server.js";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from "$app/env";

// called everytime the server receives a request
export async function handle({ event, resolve }) {

    const session = await auth.api.getSession({
    headers: event.request.headers,
  });

  // Make session and user available on server
  if (session) {
    event.locals.session = session.session;
    event.locals.user = session.user;
  }

  return svelteKitHandler({ event, resolve, auth, building });
}
