import { RefObject, useEffect, useState } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>,): boolean {
	const [value, setValue] = useState<boolean>(false);
	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);

	const node = elementRef.current as HTMLElement;
	if (node) {
		node.addEventListener("mouseover", handleMouseOver);
		node.addEventListener("mouseout", handleMouseOut);

		useEffect(() => {
			return () => {
				node.removeEventListener("mouseover", handleMouseOver);
				node.removeEventListener("mouseout", handleMouseOut);
			};
		}, [elementRef.current]);
	}

	return value;
}
