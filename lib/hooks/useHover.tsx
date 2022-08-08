import { useEffect, useRef, useState } from 'react';

export function useHover() {
	const [value, setValue] = useState(false);
	const ref: React.MutableRefObject<null> = useRef(null);
	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);
	useEffect(
		() => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const node: any = ref.current as any;
			if (node) {
				node.addEventListener('mouseover', handleMouseOver);
				node.addEventListener('mouseout', handleMouseOut);
				return () => {
					node.removeEventListener('mouseover', handleMouseOver);
					node.removeEventListener('mouseout', handleMouseOut);
				};
			}
			return;
		},
		[ref.current] // Recall only if ref changes
	);
	return [ref, value];
}
