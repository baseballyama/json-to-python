import { version } from 'json-to-python/package.json';

export const load: import('./$types').PageServerLoad = () => {
	return { version };
};
