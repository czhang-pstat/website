// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Chao Zhang\'s Blog';
export const SITE_DESCRIPTION = 'Math, stats, machine learning, and ideas';

// Prepend the configured `base` (e.g. `/website`) to an internal, root-absolute
// path so links work both locally and on GitHub Pages. Astro's `base` config
// does not rewrite hardcoded `href`s, so do it explicitly.
export const withBase = (path: string) =>
	`${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
