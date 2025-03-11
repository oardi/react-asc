import { useEffect, useState } from 'react';
import { ScreenSize } from '../enums';
import type { IUseWindowSize } from './useWindowSize';
import { useWindowSize } from './useWindowSize';

export interface IUseScreenSizeDetect {
	screenSize: ScreenSize;
	isMobile?: boolean;
	isTablet?: boolean;
	isSmallScreen?: boolean;
	isDesktop?: boolean;
	isExtraLargeScreen?: boolean;
}

export function useScreenSizeDetect(): IUseScreenSizeDetect {
	const windowSize: IUseWindowSize = useWindowSize();

	const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.md);

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

	return {
		screenSize: screenSize,
		isMobile: screenSize === ScreenSize.xs,
		isTablet: screenSize === ScreenSize.sm,
		isSmallScreen: screenSize === ScreenSize.md,
		isDesktop: screenSize === ScreenSize.lg,
		isExtraLargeScreen: screenSize === ScreenSize.xxl,
	};
}
