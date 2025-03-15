import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { ISidebarItem } from 'src/lib';
import { AppBar, AppBarTitle, Color, Drawer, IconButton, ScreenSize, useScreenSizeDetect } from 'src/lib';
import { useAppContext } from './AppContext';
import { menuItems } from './AppMenu';
import { APPSTATE } from './app.enums';
import './index.scss';
import { MenuModel, RouteModel } from './main';
import { BarsSolidIcon } from './main/assets';
import { AppBreadcrumb, AppInfo, AppSidebar, PageNotFound, ServiceWorkerWrapper } from './shared';

const App = (): React.JSX.Element => {
	const { appInfo } = useAppContext();

	const [appState, setAppState] = useState(APPSTATE.init);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { screenSize, isMobile, isTablet, isSmallScreen } = useScreenSizeDetect();
	const [routes, setRoutes] = useState<RouteModel[]>([]);
	const [sidebarItems, setSidebarItems] = useState<ISidebarItem[]>([]);

	useEffect(() => {
		init();
	}, []);

	useEffect(() => {
		if (appState === APPSTATE.ready) {
			setShowMenu(!isMobile && !isTablet && !isSmallScreen);
		}
	}, [screenSize, appState]);

	const init = (): void => {
		try {
			setRoutes(menuItems.map(item => new RouteModel(item)));
			setSidebarItems(menuItems.map(item => new MenuModel(item)));
			setAppState(APPSTATE.ready);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('init', err);
		}
	};

	return (
		<>
			<AppBar shadow color={Color.light}>
				<IconButton color={Color.primary} icon={<BarsSolidIcon />} onClick={(): void => setShowMenu(!showMenu)} />

				{appInfo && (
					<AppBarTitle>
						{appInfo.name} (v.{appInfo.version})
					</AppBarTitle>
				)}
				<AppInfo />
			</AppBar>

			<div className="main">
				{showMenu && (
					<Drawer
						permanent={screenSize !== ScreenSize.xs && screenSize !== ScreenSize.sm}
						onClickBackdrop={(): void => setShowMenu(false)}>
						<AppSidebar
							menuItems={sidebarItems}
							onItemClicked={(): false | void => setShowMenu(screenSize !== ScreenSize.xs && screenSize !== ScreenSize.sm)}
						/>
					</Drawer>
				)}

				<div className="p-2 pt-0 w-100 flex-1">
					<AppBreadcrumb className="mt-1 mb-1" />
					{
						<Routes>
							{routes &&
								routes.map(route => (
									<Route key={route.componentKey} path={route.path} element={route.element}>
										{route.routes?.map(route => (
											<Route key={route.componentKey} path={route.path} element={route.element} />
										))}
									</Route>
								))}
							<Route element={<PageNotFound />} />
						</Routes>
					}
				</div>
			</div>

			<ServiceWorkerWrapper />
		</>
	);
};

export default App;
