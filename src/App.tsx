import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './style.scss';
import * as Pages from './pages';
import { AppBar, COLOR, Drawer, IconButton, ISidebarItem, LoggerService, ModalService, SnackbarService } from './lib';
import { AppSidebar } from './shared/components';
import { AppContext, IAppContext } from './AppContext';
import { FileLoaderService } from './shared';
import packageJson from '../package.json';
import { AppInfo } from './shared/components/AppInfo';
import { barsSolidSvg } from './pages';
import { IAppInfo } from './app.interfaces';
import { ShowcaseService } from './app.service';

export const App = () => {

	const [appInfo, setAppInfo] = useState<IAppInfo>(null);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [menuItems, setMenuItems] = useState<Array<ISidebarItem>>(null);
	const loggerService = new LoggerService();
	const history = useHistory();
	const fileLoaderService = new FileLoaderService(loggerService);
	const appContext: IAppContext = {
		loggerService: loggerService,
		fileLoaderService: fileLoaderService,
		snackbarService: new SnackbarService(),
		modalService: new ModalService(),
	}
	const appService = new ShowcaseService(fileLoaderService);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		setAppInfo({ name: packageJson.name, version: packageJson.version });
		try {
			const menuResult = appService.loadMenu();
			setMenuItems((await menuResult).data);
		} catch (err) { loggerService.error('init', err) }
	}
	return (
		<AppContext.Provider value={appContext}>
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
						<Route exact path="/getting-started" component={Pages.GettingStartedPage} />
						<Route exact path="/showcase" component={Pages.ShowcasePage} />
						<Route exact path="/showcase/appbar" component={Pages.ShowcaseAppBar} />
						<Route exact path="/showcase/button" component={Pages.ShowcaseButton} />
						<Route exact path="/showcase/card" component={Pages.ShowcaseCard} />
						<Route exact path="/showcase/checkbox" component={Pages.ShowcaseCheckbox} />
						<Route exact path="/showcase/drawer" component={Pages.ShowcaseDrawer} />
						<Route exact path="/showcase/dropdown" component={Pages.ShowcaseDropDown} />
						<Route exact path="/showcase/form" component={Pages.ShowcaseForm} />
						<Route exact path="/showcase/iconbutton" component={Pages.ShowcaseIconButton} />
						<Route exact path="/showcase/list" component={Pages.ShowcaseList} />
						<Route exact path="/showcase/modal" component={Pages.ShowcaseModal} />
						<Route exact path="/showcase/snackbar" component={Pages.ShowcaseSnackbar} />
						<Route exact path="/showcase/svgicon" component={Pages.ShowcaseSvgIcon} />
						<Route exact path="/showcase/treeview" component={Pages.ShowcaseTreeView} />

						<Route render={() => <div>404 - Missing!</div>} />
					</Switch>
				</div>
			</div>
		</AppContext.Provider >
	);
}
