import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import * as Pages from './showcase'; // LazyLoading?
import { AppBar, AppBarTitle, COLOR, Drawer, IconButton, ISidebarItem, useWindowSize } from './lib';
import { AppSidebar, AppInfo, AppBreadcrumb, loggerService, ServiceWorkerWrapper } from './shared';
import { useAppContext } from './AppContext';
import { showcaseService } from './app.service';
import { MenuModel, RouteModel, BarsSolidIcon } from './showcase';
import { APPSTATE } from './app.enums';

const App = () => {

	const { appInfo } = useAppContext();
	const windowSize = useWindowSize();

	const [appState, setAppState] = useState(APPSTATE.init);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>([]);
	const [showcaseRoutes, setShowcaseRoutes] = useState<Array<RouteModel>>();

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
		try {
			const menuItems = await showcaseService.loadMenu();
			setMenuItems(menuItems.map(item => new MenuModel(item)));
			setShowcaseRoutes(menuItems.map(item => new RouteModel(item)));
			setAppState(APPSTATE.ready);
		} catch (err) { loggerService.error('init', err) }
	}

	const checkIsMobile = (height: number, width: number) => {
		if (height > 0 && width > 0) {
			if (width >= 1024) {
				setIsMobile(false);
			} else {
				setIsMobile(true);
			}
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

				<div className="container-fluid">
					<AppBreadcrumb />

					<Switch>
						{showcaseRoutes &&
							showcaseRoutes.map(showcaseRoute => (
								<Route
									exact
									path={!showcaseRoute.routes ? showcaseRoute.path : showcaseRoute.routes.map(r => r.path)}
									component={(Pages as any)[showcaseRoute.componentKey]}
									key={showcaseRoute.componentKey}>

									{showcaseRoute.routes &&
										showcaseRoute.routes.map(route => (
											<Route exact path={route.path} component={(Pages as any)[route.componentKey]} key={route.componentKey} />
										))
									}

								</Route>
							))}

						{showcaseRoutes && <Route render={() => <div>404 - Missing!</div>} />}

					</Switch>
				</div>
			</div>

			<ServiceWorkerWrapper />
		</>
	);
}

export default App;
