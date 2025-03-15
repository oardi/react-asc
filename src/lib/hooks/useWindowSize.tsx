import { useEffect, useState } from 'react';

export interface IUseWindowSize {
	width: number;
	height: number;
}

export function useWindowSize(): IUseWindowSize {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize(): void {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);
		handleResize();
		return (): void => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
}
