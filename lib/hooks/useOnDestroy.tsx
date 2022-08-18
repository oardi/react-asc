import { useEffect } from 'react';

export const useOnDestroy = (callBack: () => void): void => {
	useEffect(() => {
		return () => {
			callBack();
		};
	}, []);
};
