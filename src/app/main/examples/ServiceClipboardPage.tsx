import { withOptions } from './components';

const ServiceClipboardPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceClipboardPage: () => React.JSX.Element = withOptions(ServiceClipboardPageBase, {}, 'ServiceClipboardPageBase');
