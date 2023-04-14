import { withOptions } from './components';

const HookUseWindowSizePageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseWindowSizePage: () => JSX.Element = withOptions(HookUseWindowSizePageBase, {}, 'HookUseWindowSizePageBase');
