import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';
import * as Pages from './pages';
import { LoggerService, SnackbarService } from './lib';
import { AppSidebar } from './components';
import { AppContext, IAppContext } from './AppContext';
import { FileLoaderService } from './shared';

export const App = () => {

	const loggerService = new LoggerService();
	const appContext: IAppContext = {
		loggerService: loggerService,
		fileLoaderService: new FileLoaderService(loggerService),
		snackbarService: new SnackbarService()
	}

	const [currentRoute, setCurrentRoute] = useState<string>('');
	// const onRouteChange = (e: RouterOnChangeArgs) => {
	// 	setCurrentRoute(e.url);
	// };

	return (
		<AppContext.Provider value={appContext}>
			<AppSidebar currentRoute={currentRoute} />

			<div className="container-fluid pt-2" style={{ overflowY: 'auto' }}>
				<Switch>
					<Route path="/" component={Pages.HomePage} />
					<Route path="/about" component={Pages.AboutPage} />
					<Route path="/changelog" component={Pages.ChangelogPage} />
					<Route path="/getting-started" component={Pages.GettingStartedPage} />
					<Route path="/showcase" component={Pages.ShowcasePage} />
					<Route path="/showcase/appbar" component={Pages.ShowcaseAppBar} />
					<Route path="/showcase/button" component={Pages.ShowcaseButton} />
					<Route path="/showcase/card" component={Pages.ShowcaseCard} />
					<Route path="/showcase/chart" component={Pages.ShowcaseChart} />
					<Route path="/showcase/checkbox" component={Pages.ShowcaseCheckbox} />
					<Route path="/showcase/dropdown" component={Pages.ShowcaseDropDown} />
					<Route path="/showcase/form" component={Pages.ShowcaseForm} />
					<Route path="/showcase/iconbutton" component={Pages.ShowcaseIconButton} />
					<Route path="/showcase/list" component={Pages.ShowcaseList} />
					<Route path="/showcase/modal" component={Pages.ShowcaseModal} />
					<Route path="/showcase/snackbar" component={Pages.ShowcaseSnackbar} />
					<Route path="/showcase/svgicon" component={Pages.ShowcaseSvgIcon} />
					<Route path="/showcase/treeview" component={Pages.ShowcaseTreeView} />

					<Route render={() => <div>404 - Missing!</div>} />
				</Switch>

			</div>
		</AppContext.Provider>
	);
}
