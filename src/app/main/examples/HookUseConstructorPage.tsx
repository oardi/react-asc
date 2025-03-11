import { withOptions } from './components';

const HookUseConstructorPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseConstructorPage: () => React.JSX.Element = withOptions(HookUseConstructorPageBase, {}, 'HookUseConstructorPageBase');
