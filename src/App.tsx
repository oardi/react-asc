import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './style.scss';
import * as Pages from './pages';
import { AppBar, LoggerService, ModalService, SnackbarService } from './lib';
import { AppSidebar } from './shared/components';
import { AppContext, IAppContext } from './AppContext';
import { FileLoaderService } from './shared';
import packageJson from '../package.json';
import { AppInfo } from './shared/components/AppInfo';

export const App = () => {

	const [appInfo, setAppInfo] = useState<{ name: string, version: string }>(null);
	const [currentRoute, setCurrentRoute] = useState<string>('');
	const loggerService = new LoggerService();
	const history = useHistory();
	const appContext: IAppContext = {
		loggerService: loggerService,
		fileLoaderService: new FileLoaderService(loggerService),
		snackbarService: new SnackbarService(),
		modalService: new ModalService()
	}

	useEffect(() => { setAppInfo({ name: packageJson.name, version: packageJson.version }) }, []);

	return (
		<AppContext.Provider value={appContext}>
			<AppBar>
				{appInfo && (
					<div className="navbar-brand w-100" onClick={() => history.push('/')}>
						{appInfo.name} (v.{appInfo.version})
					</div>
				)}
				<AppInfo />
			</AppBar>

			<div className="d-flex h-100">

				<AppSidebar currentRoute={currentRoute} />

				<div className="container-fluid" style={{ overflowY: 'auto' }}>
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
		</AppContext.Provider>
	);
}
