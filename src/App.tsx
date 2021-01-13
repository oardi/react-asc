import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { hot } from "react-hot-loader";
import './style.scss';
import * as Pages from './showcase';
import { AppBar, Breadcrumb, COLOR, Drawer, IBreadcrumbItem, IconButton, ISidebarItem, loggerService } from './lib';
import { AppSidebar, AppInfo } from './shared';
import { useAppContext } from './AppContext';
import { showcaseService } from './app.service';
import { MenuModel, RouteModel, barsSolidSvg } from './showcase';

const CLASSNAME = 'App';
const App = () => {

	const { appInfo } = useAppContext();
	const history = useHistory();
	const location = useLocation();

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>(null);
	const [showcaseRoutes, setShowcaseRoutes] = useState<Array<RouteModel>>(null);
	const [breadcrumbItems, setBreadcrumbItems] = useState<Array<IBreadcrumbItem>>(null);

	useEffect(() => { init() }, []);

	// extract in AppBreadcrumb
	useEffect(() => {
		const currentPath = location.pathname.replace(' ', '');
		const splittedPath = currentPath.split('/').filter(p => p);
		const breadcrumbItems = splittedPath.map(sP => ({ label: sP, path: sP, isActive: false }));
		breadcrumbItems.unshift({ label: 'Home', path: '/', isActive: false });
		breadcrumbItems[breadcrumbItems.length - 1].isActive = true;
		setBreadcrumbItems(breadcrumbItems);
	}, [location]);

	const init = async () => {
		try {
			const menuResult = await showcaseService.loadMenu();
			setMenuItems(menuResult.data.map(dto => new MenuModel(dto)));
			setShowcaseRoutes(menuResult.data.map(dto => new RouteModel(dto)));
		} catch (err) { loggerService.error('init', err) }
	}

	const handleClickBreadcrumbItem = (item: IBreadcrumbItem) => {
		loggerService.debug(CLASSNAME, 'handleClickBreadcrumbItem');
		console.warn(location.pathname, item);
		if (location.pathname !== item.path)
			history.push(item.path);
	}

	return (
		<>
			<AppBar>
				<IconButton className="mr-2" color={COLOR.light} icon={barsSolidSvg} onClick={() => setShowMenu(!showMenu)} />
				{appInfo && (
					<div className="navbar-brand w-100" onClick={() => history.push('/')}>
						{appInfo.name} (v.{appInfo.version})
					</div>
				)}
				<AppInfo />
			</AppBar>

			<div className="main">


				{showMenu &&
					<Drawer onClickBackdrop={() => setShowMenu(false)}>
						<AppSidebar menuItems={menuItems} onItemClicked={() => setShowMenu(false)} />
					</Drawer>
				}

				<div className="container">
					<Breadcrumb className="mt-3" items={breadcrumbItems} onItemClick={handleClickBreadcrumbItem} />

					<Switch>
						{showcaseRoutes &&
							showcaseRoutes.map(showcaseRoute => (
								<Route
									exact
									path={!showcaseRoute.routes ? showcaseRoute.path : showcaseRoute.routes.map(r => r.path)}
									component={Pages[showcaseRoute.componentKey]}
									key={showcaseRoute.componentKey}>

									{ showcaseRoute.routes &&
										showcaseRoute.routes.map(route => (
											<Route exact path={route.path} component={Pages[route.componentKey]} key={route.componentKey} />
										))
									}

								</Route>
							))}

						{showcaseRoutes && <Route render={() => <div>404 - Missing!</div>} />}

					</Switch>
				</div>
			</div>
		</>
	);
}

export default hot(module)(App);
