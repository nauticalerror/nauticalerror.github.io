import site from './+site.yaml';

export const prerender = true;

export const load = () => {
	return {
		...site
	};
};
