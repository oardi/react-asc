import { useEffect } from 'react';

export const useOnDestroy = (callBack: () => void) => {
	useEffect(() => {
		return () => {
			callBack();
		};
	}, []);
};
