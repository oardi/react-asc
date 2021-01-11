import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ISidebarItem, Sidebar } from '../../lib';

interface IAppSidebarProps {
	menuItems: Array<ISidebarItem>;
	onItemClicked?: () => void;
}

export const AppSidebar = ({ menuItems, onItemClicked }: IAppSidebarProps) => {

	const history = useHistory();
	const location = useLocation();

	const handleItemClicked = (path: string) => {
		onItemClicked && onItemClicked();
		history.push(path);
	}

	return (
		<Sidebar
			items={menuItems}
			currentUrl={location.pathname}
			onItemClicked={handleItemClicked}
		/>
	);
}
