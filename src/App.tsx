import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { AppSidebar, AppInfo, AppBreadcrumb, loggerService, ServiceWorkerWrapper, PageNotFound } from './shared';
import { useAppContext } from './AppContext';
import { APPSTATE } from './app.enums';
import { MenuModel, RouteModel } from './main';
import { BarsSolidIcon } from './main/assets';
import { AppBar, AppBarTitle, COLOR, Drawer, IconButton, ISidebarItem, useMobileDetect } from 'lib';
import { menuItems } from './AppMenu';

const CLASSNAME: string = 'App';

const App = () => {

	const { appInfo } = useAppContext();

	const [appState, setAppState] = useState(APPSTATE.init);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { isMobile } = useMobileDetect();
	const [routes, setRoutes] = useState<RouteModel[]>([]);
	const [sidebarItems, setSidebarItems] = useState<ISidebarItem[]>([]);

	useEffect(() => { init(); }, []);

	useEffect(() => {
		if (appState === APPSTATE.ready && isMobile === false) {
			setShowMenu(true);
		}
	}, [isMobile, appState]);

	const init = () => {
		loggerService.debug(CLASSNAME, 'init');
		try {
			setRoutes(menuItems.map(item => new RouteModel(item)));
			setSidebarItems(menuItems.map(item => new MenuModel(item)));
			setAppState(APPSTATE.ready);
		} catch (err) { loggerService.error('init', err); }
	};

	return (
		<>
			<AppBar shadow color={COLOR.light}>
				<IconButton
					color={COLOR.primary}
					icon={<BarsSolidIcon />}
					onClick={() => setShowMenu(!showMenu)}
				/>

				{appInfo && (
					<AppBarTitle>
						{appInfo.name} (v.{appInfo.version})
					</AppBarTitle>
				)}
				<AppInfo />
			</AppBar>

			<div className="main">
				{showMenu &&
					<Drawer permanent={!isMobile} onClickBackdrop={() => setShowMenu(false)}>
						<AppSidebar menuItems={sidebarItems} onItemClicked={() => isMobile && setShowMenu(false)} />
					</Drawer>
				}

				<div className="p-2 pt-0 w-100 flex-1">
					<AppBreadcrumb className="mt-1 mb-1" />
					{
						routes && routes.length > 0 &&
						<Routes>
							{routes.map(route =>
								<Route key={route.componentKey} path={route.path} element={route.element}>
									{route.routes?.map(route =>
										<Route key={route.componentKey} path={route.path} element={route.element} />
									)}
								</Route>
							)}
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
