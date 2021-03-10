import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Breadcrumb, IBreadcrumbItem, loggerService } from '../../lib';

const CLASSNAME = '';
export const AppBreadcrumb = () => {

	const location = useLocation();
	const history = useHistory();
	const [items, setItems] = useState<Array<IBreadcrumbItem>>([]);

	// extract in AppBreadcrumb
	useEffect(() => {
		const currentPath = location.pathname.replace(' ', '');
		const splittedPath = currentPath.split('/').filter(p => p !== 'Showcase' && p); // TODO - showcase
		const newItems = splittedPath.map(sP => ({ label: sP, path: '/' + sP, isActive: false }));
		newItems.unshift({ label: 'Home', path: '/', isActive: false });
		newItems[newItems.length - 1].isActive = true;
		setItems(newItems.length <= 1 ? [] : newItems);
	}, [location]);

	const handleClickBreadcrumbItem = (item: IBreadcrumbItem) => {
		loggerService.debug(CLASSNAME, 'handleClickBreadcrumbItem');
		if (location.pathname !== item.path)
			history.push(item.path as string);
	}

	return (
		<Fragment>
			{items &&
				<Breadcrumb
					className="mt-3"
					items={items}
					onItemClick={handleClickBreadcrumbItem}
				/>
			}
		</Fragment>
	);
}
