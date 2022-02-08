export function useCssClasses(cssClasses: Array<string>) {
	const cssClassName = cssClasses?.filter(css => css).join(' ') || '';
	return [cssClassName];
}
