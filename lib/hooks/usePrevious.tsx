import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
	const ref: MutableRefObject<T | undefined> = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}
