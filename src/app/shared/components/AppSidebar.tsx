import type { Location, NavigateFunction } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import type { ISidebarItem } from 'src/lib';
import { AppBar, AppBarTitle, Color, Sidebar } from 'src/lib';

interface IAppSidebarProps {
	menuItems: ISidebarItem[];
	onItemClicked?: () => void;
}

export const AppSidebar = ({ menuItems, onItemClicked }: IAppSidebarProps): React.JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();

	const handleItemClicked = (path: string): void => {
		onItemClicked && onItemClicked();
		void navigate(path);
	};

	return (
		<>
			<div className="d-flex flex-column h-100">
				<AppBar color={Color.light}>
					<AppBarTitle>Menu</AppBarTitle>
				</AppBar>
				<div style={{ overflowY: 'auto' }}>
					<Sidebar items={menuItems} currentUrl={location.pathname} onItemClicked={handleItemClicked} />
				</div>
			</div>
		</>
	);
};
