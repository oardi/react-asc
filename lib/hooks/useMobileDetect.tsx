import { useEffect, useState } from 'react';
import { IUseWindowSize, useWindowSize } from './useWindowSize';

export function useMobileDetect() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const windowSize: IUseWindowSize = useWindowSize();

	const checkIsMobile = (height: number, width: number) => {
		if (height > 0 && width > 0) {
			setIsMobile(!(width >= 640));
		}
	};

	useEffect(() => {
		windowSize && checkIsMobile(windowSize.height, windowSize.width);
	}, [windowSize]);

	return { isMobile };
}
