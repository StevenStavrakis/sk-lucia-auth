import type { PageServerLoad } from './$types';

// TODO: this route should be authenticated
// No unauthenticated users should be able to see this page

// Q: how do we know if the user is authenticated?
// A:
// Q: what should we do if the user is not authenticated?
// A:

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;