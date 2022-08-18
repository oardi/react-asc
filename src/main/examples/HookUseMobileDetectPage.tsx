import React from 'react';
import { withOptions } from './components';

const HookUseMobileDetectPageBase = (): JSX.Element => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
};

export const HookUseMobileDetectPage: () => JSX.Element = withOptions(HookUseMobileDetectPageBase, {
}, 'HookUseMobileDetectPageBase');
