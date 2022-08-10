import React from 'react';
import { withOptions } from './components';

const HookUseWindowSizePageBase = () => {
	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
};

export const HookUseWindowSizePage = withOptions(HookUseWindowSizePageBase, {
}, 'HookUseWindowSizePageBase');
