import { Breadcrumb, BreadcrumbItem } from 'src/lib';
import { withOptions } from './components';

const BreadcrumbPageBase = (): React.JSX.Element => {
	return (
		<>
			<Breadcrumb className="mb-0">
				<BreadcrumbItem path="/">Home</BreadcrumbItem>
				<BreadcrumbItem path="/">Library</BreadcrumbItem>
				<BreadcrumbItem path="/" isActive>
					Data
				</BreadcrumbItem>
			</Breadcrumb>
		</>
	);
};

export const BreadcrumbPage: () => React.JSX.Element = withOptions(BreadcrumbPageBase, null, 'BreadcrumbPageBase');
