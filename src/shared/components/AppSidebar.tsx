import type { ISidebarItem } from 'lib';
import { AppBar, AppBarTitle, COLOR, Sidebar } from 'lib';
import type { Location, NavigateFunction } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

interface IAppSidebarProps {
	menuItems: ISidebarItem[];
	onItemClicked?: () => void;
}

export const AppSidebar = ({ menuItems, onItemClicked }: IAppSidebarProps): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();

	const handleItemClicked = (path: string): void => {
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
					<Sidebar items={menuItems} currentUrl={location.pathname} onItemClicked={handleItemClicked} />
				</div>
			</div>
		</>
	);
};
