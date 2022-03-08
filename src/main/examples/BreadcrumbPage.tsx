import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'lib';
import { withOptions } from './components';

const BreadcrumbPageBase = () => {
	return (
		<>
			<Breadcrumb className="mb-0">
				<BreadcrumbItem path="/">Home</BreadcrumbItem>
				<BreadcrumbItem path="/">Library</BreadcrumbItem>
				<BreadcrumbItem path="/" isActive>Data</BreadcrumbItem>
			</Breadcrumb>
		</>
	);
}

export const BreadcrumbPage = withOptions(BreadcrumbPageBase, null, 'BreadcrumbPageBase');
