import { useEffect, useRef } from "react";

export function useDebounce(callback: any, timeout: any, deps: any) {
	const timeoutId: any = useRef();

	useEffect(() => {
		clearTimeout(timeoutId.current);
		timeoutId.current = setTimeout(callback, timeout);
		return () => clearTimeout(timeoutId.current);
	}, deps);
}
