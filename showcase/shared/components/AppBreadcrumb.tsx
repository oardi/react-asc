import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '../../../src/lib';
import { loggerService } from '../services';

interface IAppBreadcrumb {
	label: string;
	path?: string;
	isActive?: boolean;
}

const CLASSNAME = 'AppBreadcrumb';
export const AppBreadcrumb = () => {

	const location = useLocation();
	const history = useHistory();
	const [items, setItems] = useState<Array<IAppBreadcrumb>>([]);

	// extract in AppBreadcrumb
	useEffect(() => {
		const currentPath = location.pathname.replace(' ', '');
		const splittedPath = currentPath.split('/').filter(p => p !== 'Showcase' && p); // TODO - showcase
		const newItems = splittedPath.map(sP => ({ label: sP, path: '/' + sP, isActive: false }));
		newItems.unshift({ label: 'Home', path: '/', isActive: false });
		newItems[newItems.length - 1].isActive = true;
		setItems(newItems.length <= 1 ? [] : newItems);
	}, [location]);

	const handleClickBreadcrumbItem = (item: IAppBreadcrumb) => {
		loggerService.debug(CLASSNAME, 'handleClickBreadcrumbItem');
		if (!item.isActive && location.pathname !== item.path)
			history.push(item.path as string);
	}

	return (
		<Fragment>
			<Breadcrumb>
				{items &&
					items.map((item, index) =>
						<BreadcrumbItem key={index} isActive={item.isActive} path={item.path} onClick={() => handleClickBreadcrumbItem(item)}>
							{item.label}
						</BreadcrumbItem>
					)
				}
			</Breadcrumb>
		</Fragment>
	);
}
