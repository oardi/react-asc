export function useCssClasses(cssClasses: string[]) {
	return [cssClasses?.filter(css => css).join(' ') || ''];
}
