import { withOptions } from './components';

const HookUseHoverPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseHoverPage: () => React.JSX.Element = withOptions(HookUseHoverPageBase, {}, 'HookUseHoverPageBase');
