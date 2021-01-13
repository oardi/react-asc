import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Breadcrumb, IBreadcrumbItem, loggerService } from '../../lib';

const CLASSNAME = '';
export const AppBreadcrumb = () => {

	const location = useLocation();
	const history = useHistory();
	const [items, setItems] = useState<Array<IBreadcrumbItem>>(null);

	// extract in AppBreadcrumb
	useEffect(() => {
		const currentPath = location.pathname.replace(' ', '');
		const splittedPath = currentPath.split('/').filter(p => p !== 'Showcase' && p); // TODO - showcase
		const breadcrumbItems = splittedPath.map(sP => ({ label: sP, path: sP, isActive: false }));
		breadcrumbItems.unshift({ label: 'Home', path: '/', isActive: false });
		breadcrumbItems[breadcrumbItems.length - 1].isActive = true;
		setItems(breadcrumbItems);
	}, [location]);

	const handleClickBreadcrumbItem = (item: IBreadcrumbItem) => {
		loggerService.debug(CLASSNAME, 'handleClickBreadcrumbItem');
		console.warn(location.pathname, item);
		if (location.pathname !== item.path)
			history.push(item.path);
	}

	return (
		<Breadcrumb
			className="mt-3"
			items={items}
			onItemClick={handleClickBreadcrumbItem}
		/>
	);
}
