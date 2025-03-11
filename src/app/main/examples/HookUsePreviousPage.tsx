import { withOptions } from './components';

const HookUsePreviousPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUsePreviousPage: () => React.JSX.Element = withOptions(HookUsePreviousPageBase, {}, 'HookUsePreviousPageBase');
