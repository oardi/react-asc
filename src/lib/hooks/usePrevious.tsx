import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
	const ref: React.RefObject<T | undefined> = useRef(undefined);
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}
