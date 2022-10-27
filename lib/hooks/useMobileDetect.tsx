import { useEffect, useState } from 'react';
import type { IUseWindowSize} from './useWindowSize';
import { useWindowSize } from './useWindowSize';

export function useMobileDetect(): { isMobile: boolean; } {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const windowSize: IUseWindowSize = useWindowSize();

	const checkIsMobile = (height: number, width: number): void => {
		if (height > 0 && width > 0) {
			setIsMobile(!(width >= 640));
		}
	};

	useEffect(() => {
		windowSize && checkIsMobile(windowSize.height, windowSize.width);
	}, [windowSize]);

	return { isMobile: isMobile };
}
