import React from 'react';
import { withOptions } from './components';

const HookUseConstructorPageBase = () => {

	return (
		<>
			Switch to "Usage" to see how to use this hook
		</>
	);
};

export const HookUseConstructorPage: () => JSX.Element = withOptions(HookUseConstructorPageBase, {
}, 'HookUseConstructorPageBase');
