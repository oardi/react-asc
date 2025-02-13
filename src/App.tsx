import type { ISidebarItem } from 'lib';
import { AppBar, AppBarTitle, Color, Drawer, IconButton, ScreenSize, loggerService, useScreenSizeDetect } from 'lib';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { menuItems } from './AppMenu';
import { APPSTATE } from './app.enums';
import './index.scss';
import { MenuModel, RouteModel } from './main';
import { BarsSolidIcon } from './main/assets';
import { AppBreadcrumb, AppInfo, AppSidebar, PageNotFound, ServiceWorkerWrapper } from './shared';

const CLASSNAME: string = 'App';

const App = (): JSX.Element => {
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
		loggerService.debug(CLASSNAME, 'init');
		try {
			setRoutes(menuItems.map(item => new RouteModel(item)));
			setSidebarItems(menuItems.map(item => new MenuModel(item)));
			setAppState(APPSTATE.ready);
		} catch (err) {
			loggerService.error('init', err);
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
						<AppSidebar menuItems={sidebarItems} onItemClicked={(): false | void => setShowMenu(false)} />
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
