import { withOptions } from './components';

const HookUseHoverPageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseHoverPage: () => JSX.Element = withOptions(HookUseHoverPageBase, {}, 'HookUseHoverPageBase');
