import { withOptions } from './components';

const HookUseDebouncePageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this hook</>;
};

export const HookUseDebouncePage: () => React.JSX.Element = withOptions(HookUseDebouncePageBase, {}, 'HookUseDebouncePageBase');
