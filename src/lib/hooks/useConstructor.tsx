import { useEffect } from 'react';

export const useConstructor = (callBack: () => void): void => {
	useEffect(() => {
		callBack();
	}, []);
};
