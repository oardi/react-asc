import React from 'react';
import { Breadcrumb } from '../../lib';
import { withOptions } from './components';

const BreadcrumbPageBase = () => {
	return (
		<div>
			<Breadcrumb
				className="mb-0"
				items={[
					{ label: 'Home', path: '/' },
					{ label: 'Library', path: '/' },
					{ label: 'Data', path: '/', isActive: true }
				]}
			/>
		</div>
	);
}

export const BreadcrumbPage = withOptions(BreadcrumbPageBase);
