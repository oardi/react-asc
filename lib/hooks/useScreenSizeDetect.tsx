import { useEffect, useState } from 'react';
import { ScreenSize } from '../enums';
import type { IUseWindowSize } from './useWindowSize';
import { useWindowSize } from './useWindowSize';

export function useScreenSizeDetect(): { screenSize: ScreenSize } {
	const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.md);
	const windowSize: IUseWindowSize = useWindowSize();

	const checkScreenSize = (height: number, width: number): void => {
		if (height > 0 && width > 0) {
			if (width <= 480) {
				setScreenSize(ScreenSize.xs);
			}
			if (width >= 480 && width <= 768) {
				setScreenSize(ScreenSize.sm);
			}
			if (width >= 768 && width <= 1024) {
				setScreenSize(ScreenSize.md);
			}
			if (width >= 1024 && width <= 1200) {
				setScreenSize(ScreenSize.lg);
			}
			if (width >= 1200) {
				setScreenSize(ScreenSize.xxl);
			}
		}
	};

	useEffect(() => {
		windowSize && checkScreenSize(windowSize.height, windowSize.width);
	}, [windowSize]);

	return { screenSize: screenSize };
}
