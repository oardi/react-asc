import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { hot } from "react-hot-loader";
import './style.scss';
import * as Pages from './showcase'; // LazyLoading?
import { AppBar, COLOR, Drawer, IconButton, ISidebarItem, loggerService } from './lib';
import { AppSidebar, AppInfo, AppBreadcrumb } from './shared';
import { useAppContext } from './AppContext';
import { showcaseService } from './app.service';
import { MenuModel, RouteModel, barsSolidSvg } from './showcase';

const CLASSNAME = 'App';
const App = () => {

	const { appInfo } = useAppContext();
	const history = useHistory();

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>(null);
	const [showcaseRoutes, setShowcaseRoutes] = useState<Array<RouteModel>>(null);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const menuResult = await showcaseService.loadMenu();
			setMenuItems(menuResult.data.map(dto => new MenuModel(dto)));
			setShowcaseRoutes(menuResult.data.map(dto => new RouteModel(dto)));
		} catch (err) { loggerService.error('init', err) }
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
					<AppBreadcrumb />

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
