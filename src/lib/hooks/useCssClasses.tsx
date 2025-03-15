export function useCssClasses(cssClasses: string[]): string[] {
	return [cssClasses?.filter(css => css).join(' ') || ''];
}
