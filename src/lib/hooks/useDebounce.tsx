import type React from 'react';
import { useEffect, useRef } from 'react';

export function useDebounce(callback: () => void, timeout: number, deps: React.DependencyList): void {
	const timeoutId: React.RefObject<NodeJS.Timeout | undefined> = useRef(undefined);

	useEffect(() => {
		clearTimeout(timeoutId.current as NodeJS.Timeout);
		timeoutId.current = setTimeout(callback, timeout);
		return (): void => clearTimeout(timeoutId.current as NodeJS.Timeout);
	}, deps);
}
