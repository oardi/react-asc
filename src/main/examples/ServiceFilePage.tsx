import { withOptions } from './components';

const ServiceFilePageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceFilePage: () => JSX.Element = withOptions(ServiceFilePageBase, {}, 'ServiceFilePageBase');
