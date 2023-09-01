import { withOptions } from './components';

const ServiceLocalPageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceLocalPage: () => JSX.Element = withOptions(ServiceLocalPageBase, {}, 'ServiceLocalPageBase');
