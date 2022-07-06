import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, AppBarTitle, COLOR, ISidebarItem, Sidebar } from 'lib';

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
		<>
			<div className="d-flex flex-column h-100">
				<AppBar color={COLOR.light}>
					<AppBarTitle>Menu</AppBarTitle>
				</AppBar>
				<div style={{ overflowY: 'auto' }}>
					<Sidebar
						items={menuItems}
						currentUrl={location.pathname}
						onItemClicked={handleItemClicked}
					/>
				</div>
			</div>
		</>
	);
}
