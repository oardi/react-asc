export function useCssClasses(cssClasses: Array<string>) {
	return [cssClasses?.filter(css => css).join(' ') || ''];
}
