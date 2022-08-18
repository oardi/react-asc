import React from 'react';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, AppBarTitle, COLOR, ISidebarItem, Sidebar } from 'lib';

interface IAppSidebarProps {
	menuItems: ISidebarItem[];
	onItemClicked?: () => void;
}

export const AppSidebar = ({ menuItems, onItemClicked }: IAppSidebarProps) => {

	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();

	const handleItemClicked = (path: string) => {
		onItemClicked && onItemClicked();
		navigate(path);
	};

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
};
