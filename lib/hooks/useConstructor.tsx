import { useState } from 'react';

export const useConstructor = (callBack: () => void): void => {
	const [hasBeenCalled, setHasBeenCalled] = useState(false);
	if (hasBeenCalled) {
		return;
	}
	callBack();
	setHasBeenCalled(true);
};
