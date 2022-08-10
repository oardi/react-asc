import React from 'react';
import { withOptions } from './components';

const HookUseDebouncePageBase = () => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
};

export const HookUseDebouncePage = withOptions(HookUseDebouncePageBase, {
}, 'HookUseDebouncePageBase');
