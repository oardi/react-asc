import { withOptions } from './components';

const HookUseMobileDetectPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseMobileDetectPage: () => React.JSX.Element = withOptions(HookUseMobileDetectPageBase, {}, 'HookUseMobileDetectPageBase');
