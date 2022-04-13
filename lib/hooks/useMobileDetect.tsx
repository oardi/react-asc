import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export function useMobileDetect() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const windowSize = useWindowSize();

	const checkIsMobile = (height: number, width: number) => {
		if (height > 0 && width > 0) {
			setIsMobile(!(width >= 1024));
		}
	}

	useEffect(() => {
		windowSize && checkIsMobile(windowSize.height, windowSize.width);
	}, [windowSize]);

	return { isMobile };
}
