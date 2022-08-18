import React from 'react';
import { withOptions } from './components';

const HookUseDebouncePageBase = (): JSX.Element => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
};

export const HookUseDebouncePage: () => JSX.Element = withOptions(HookUseDebouncePageBase, {
}, 'HookUseDebouncePageBase');
