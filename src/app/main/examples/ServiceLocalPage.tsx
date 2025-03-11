import { withOptions } from './components';

const ServiceLocalPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceLocalPage: () => React.JSX.Element = withOptions(ServiceLocalPageBase, {}, 'ServiceLocalPageBase');
