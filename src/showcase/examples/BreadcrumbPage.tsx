import React from 'react';
import { Breadcrumb } from '../../lib';
import { withOptions } from './components';

const BreadcrumbPageBase = () => {
	return (
		<div>
			<Breadcrumb
				items={[
					{ label: 'Showcase', path: '/showcase' },
					{ label: 'Breadcrumb', path: '/breadcrumb', isActive: true }
				]}
			/>
		</div>
	);
}

export const BreadcrumbPage = withOptions(BreadcrumbPageBase);
