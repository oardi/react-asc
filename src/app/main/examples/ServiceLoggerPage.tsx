import { withOptions } from './components';

const ServiceLoggerPageBase = (): React.JSX.Element => {
	return <>Switch to "Usage" to see how to use this service</>;
};

export const ServiceLoggerPage: () => React.JSX.Element = withOptions(ServiceLoggerPageBase, {}, 'ServiceLoggerPageBase');
