import React, { useEffect, useState } from 'react';
import type { Location, NavigateFunction } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, HomeSolidIcon, Icon } from 'src/lib';

interface IAppBreadcrumbProps {
	className?: string;
}

interface IAppBreadcrumb {
	label: string;
	path?: string;
	isActive?: boolean;
	icon?: React.ReactElement;
}

export const AppBreadcrumb = ({ className }: IAppBreadcrumbProps): React.JSX.Element => {
	const location: Location = useLocation();
	const navigate: NavigateFunction = useNavigate();
	const [items, setItems] = useState<IAppBreadcrumb[]>([]);

	// extract in AppBreadcrumb
	useEffect(() => {
		const currentPath: string = location.pathname.replace(' ', '');
		const splittedPath: string[] = currentPath.split('/').filter(p => p !== 'Showcase' && p); // TODO - showcase
		const newItems: IAppBreadcrumb[] = splittedPath.map(sP => ({ label: sP, path: '/' + sP, isActive: false }));
		newItems.unshift({ label: 'Home', path: '/', isActive: false, icon: <HomeSolidIcon /> });
		newItems[newItems.length - 1].isActive = true;
		setItems(newItems.length <= 1 ? [] : newItems);
	}, [location]);

	const handleClickBreadcrumbItem = (item: IAppBreadcrumb): void => {
		if (!item.isActive && location.pathname !== item.path) {
			void navigate(item.path as string);
		}
	};

	return (
		<>
			{items && items.length > 0 && (
				<Breadcrumb className={className}>
					{items.map((item, index) => (
						<BreadcrumbItem
							key={index}
							isActive={item.isActive}
							path={item.path}
							onClick={(): void => handleClickBreadcrumbItem(item)}>
							{item.label && !item.icon && <span>{item.label}</span>}
							{item.icon && <Icon>{item.icon}</Icon>}
						</BreadcrumbItem>
					))}
				</Breadcrumb>
			)}
		</>
	);
};
