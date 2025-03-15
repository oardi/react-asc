import { withOptions } from './components';

const ServiceFilePageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceFilePage: () => React.JSX.Element = withOptions(ServiceFilePageBase, {}, 'ServiceFilePageBase');
