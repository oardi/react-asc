import React, { useEffect, useRef } from "react";

export function useDebounce(callback: () => void, timeout: number, deps: React.DependencyList) {
	const timeoutId: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef();

	useEffect(() => {
		clearTimeout(timeoutId.current as NodeJS.Timeout);
		timeoutId.current = setTimeout(callback, timeout);
		return () => clearTimeout(timeoutId.current as NodeJS.Timeout);
	}, deps);
}
