import React from 'react';
import { withOptions } from './components';

const HookUseHoverPageBase = () => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
}

export const HookUseHoverPage = withOptions(HookUseHoverPageBase, {
}, 'HookUseHoverPageBase');
