import { version } from 'json-to-typeddict/package.json';

export const load: import('./$types').PageServerLoad = () => {
	return { version };
};
