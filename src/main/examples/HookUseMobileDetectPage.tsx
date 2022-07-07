import React from 'react';
import { withOptions } from './components';

const HookUseMobileDetectPageBase = () => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
}

export const HookUseMobileDetectPage = withOptions(HookUseMobileDetectPageBase, {
}, 'HookUseMobileDetectPageBase');
