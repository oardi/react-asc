import { withOptions } from './components';

const HookUsePreviousPageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUsePreviousPage: () => JSX.Element = withOptions(HookUsePreviousPageBase, {}, 'HookUsePreviousPageBase');
