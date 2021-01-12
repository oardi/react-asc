import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { hot } from "react-hot-loader";
import './style.scss';
import * as Pages from './showcase';
import { AppBar, COLOR, Drawer, IconButton, ISidebarItem } from './lib';
import { AppSidebar } from './shared/components';
import { useAppContext } from './AppContext';
import { AppInfo } from './shared/components/AppInfo';
import { barsSolidSvg } from './showcase';
import { ShowcaseService } from './app.service';

const CLASSNAME = 'App';
const App = () => {

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>(null);
	const [showcaseRoutes, setShowcaseRoutes] = useState<Array<{ path: string, componentKey: string }>>(null);

	const { loggerService, fileLoaderService, appInfo } = useAppContext();

	const history = useHistory();
	const appService = new ShowcaseService(fileLoaderService);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try {
			const menuResult = await appService.loadMenu();

			// TODO - models
			setMenuItems(menuResult.data.map(dto => (
				{
					id: dto.id,
					label: dto.label ? dto.label : dto.id,
					path: dto.path !== undefined ? dto.path : dto.id,
					items: dto.items && dto.items.map(item => ({ id: item.id, label: item.label ? item.label : item.id, path: item.id }))
				}
			)));

			// TODO - models
			setShowcaseRoutes(menuResult.data.find(dto => dto.id === 'Showcase').items.map(dto => (
				{ path: dto.path ? dto.path : '/showcase/' + dto.id, componentKey: 'Showcase' + dto.id }
			)));
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
					<Drawer
						onClickBackdrop={() => setShowMenu(false)}
					>
						{/* TODO */}
						<AppSidebar
							menuItems={menuItems}
							onItemClicked={() => setShowMenu(false)}
						/>
					</Drawer>
				}

				<div className="container">
					<Switch>
						<Route exact path="/" component={Pages.HomePage} />
						<Route exact path="/about" component={Pages.AboutPage} />
						<Route exact path="/gettingstarted" component={Pages.GettingStartedPage} />

						{showcaseRoutes &&
							<Route exact path={showcaseRoutes.map(showcaseRoutes => showcaseRoutes.path)}>
								{showcaseRoutes.map(showcaseRoute =>
									<Route key={showcaseRoute.componentKey} exact path={showcaseRoute.path} component={Pages[showcaseRoute.componentKey]} />
								)}
							</Route>
						}

						<Route render={() => <div>404 - Missing!</div>} />
					</Switch>
				</div>
			</div>
		</>
	);
}

export default hot(module)(App);
