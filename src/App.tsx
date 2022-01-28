import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import * as Pages from './main'; // LazyLoading?
import { AppSidebar, AppInfo, AppBreadcrumb, loggerService, ServiceWorkerWrapper } from './shared';
import { useAppContext } from './AppContext';
import { showcaseService } from './app.service';
import { APPSTATE } from './app.enums';
import { MenuModel, RouteModel } from './main';
import { BarsSolidIcon } from './main/assets';
import { AppBar, AppBarTitle, COLOR, Drawer, IconButton, ISidebarItem, useWindowSize } from 'lib';

const CLASSNAME = 'App';

const App = () => {

	const { appInfo } = useAppContext();
	const windowSize = useWindowSize();

	const [appState, setAppState] = useState(APPSTATE.init);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>([]);
	const [appRoutes, setAppRoutes] = useState<Array<RouteModel>>();

	useEffect(() => { init() }, []);

	useEffect(() => {
		windowSize && checkIsMobile(windowSize.height, windowSize.width);
	}, [windowSize]);

	useEffect(() => {
		if (appState === APPSTATE.ready && isMobile === false) {
			setShowMenu(true);
		}
	}, [isMobile, appState]);

	const init = async () => {
		loggerService.debug(CLASSNAME, 'init');
		try {
			const menuItems = await showcaseService.loadMenu();
			setMenuItems(menuItems.map(item => new MenuModel(item)));
			setAppRoutes(menuItems.map(item => new RouteModel(item)));
			setAppState(APPSTATE.ready);
		} catch (err) { loggerService.error('init', err) }
	}

	const checkIsMobile = (height: number, width: number) => {
		if (height > 0 && width > 0) {
			setIsMobile(!(width >= 1024));
		}
	}

	return (
		<>
			<AppBar shadow>
				<IconButton
					color={COLOR.light}
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
						<AppSidebar menuItems={menuItems} onItemClicked={() => isMobile && setShowMenu(false)} />
					</Drawer>
				}

				<div className="p-1 pt-0 w-100">
					<AppBreadcrumb className="mt-2" />

					<Switch>
						{appRoutes &&
							appRoutes.map(appRoute => (
								<Route
									exact
									path={!appRoute.routes ? appRoute.path : appRoute.routes.map(r => r.path)}
									// eslint-disable-next-line @typescript-eslint/no-explicit-any
									component={(Pages as any)[appRoute.componentKey]}
									key={appRoute.componentKey}>

									{appRoute.routes &&
										appRoute.routes.map(route => (
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											<Route exact path={route.path} component={(Pages as any)[route.componentKey]} key={route.componentKey} />
										))
									}

								</Route>
							))}

						{appRoutes && <Route render={() => <div>404 - Missing!</div>} />}

					</Switch>
				</div>
			</div>

			<ServiceWorkerWrapper />
		</>
	);
}

export default App;
