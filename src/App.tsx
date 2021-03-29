import React, { Fragment, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './index.scss';
import * as Pages from './showcase'; // LazyLoading?
import { AppBar, AppBarTitle, COLOR, Drawer, IconButton, ISidebarItem } from './lib';
import { AppSidebar, AppInfo, AppBreadcrumb, loggerService } from './shared';
import { useAppContext } from './AppContext';
import { showcaseService } from './app.service';
import { MenuModel, RouteModel, BarsSolidIcon } from './showcase';

const App = () => {

	const { appInfo } = useAppContext();
	const history = useHistory();

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>([]);
	const [showcaseRoutes, setShowcaseRoutes] = useState<Array<RouteModel>>([]);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const menuResult = await showcaseService.loadMenu();
			setMenuItems(menuResult.data.map(dto => new MenuModel(dto)));
			setShowcaseRoutes(menuResult.data.map(dto => new RouteModel(dto)));
		} catch (err) { loggerService.error('init', err) }
	}

	return (
		<Fragment>
			<AppBar shadow>
				<IconButton color={COLOR.light} className="mr-2" icon={<BarsSolidIcon />} onClick={() => setShowMenu(!showMenu)} />
				{appInfo && (
					<AppBarTitle onClick={() => history.push('/')}>
						{appInfo.name} (v.{appInfo.version})
					</AppBarTitle>
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
									component={(Pages as any)[showcaseRoute.componentKey]}
									key={showcaseRoute.componentKey}>

									{ showcaseRoute.routes &&
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
		</Fragment>
	);
}

export default App;
