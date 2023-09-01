import { withOptions } from './components';

const ServiceLoggerPageBase = (): JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceLoggerPage: () => JSX.Element = withOptions(ServiceLoggerPageBase, {}, 'ServiceLoggerPageBase');
