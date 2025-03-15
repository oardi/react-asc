import { withOptions } from './components';

const HookUseWindowSizePageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseWindowSizePage: () => React.JSX.Element = withOptions(HookUseWindowSizePageBase, {}, 'HookUseWindowSizePageBase');
