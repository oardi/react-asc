import { withOptions } from './components';

const ServiceClipboardPageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceClipboardPage: () => JSX.Element = withOptions(ServiceClipboardPageBase, {}, 'ServiceClipboardPageBase');
