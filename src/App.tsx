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
					<Route exact path="/" component={Pages.HomePage} />
					<Route exact path="/about" component={Pages.AboutPage} />
					<Route exact path="/changelog" component={Pages.ChangelogPage} />
					<Route exact path="/getting-started" component={Pages.GettingStartedPage} />
					<Route exact path="/showcase" component={Pages.ShowcasePage} />
					<Route exact path="/showcase/appbar" component={Pages.ShowcaseAppBar} />
					<Route exact path="/showcase/button" component={Pages.ShowcaseButton} />
					<Route exact path="/showcase/card" component={Pages.ShowcaseCard} />
					<Route exact path="/showcase/chart" component={Pages.ShowcaseChart} />
					<Route exact path="/showcase/checkbox" component={Pages.ShowcaseCheckbox} />
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
		</AppContext.Provider>
	);
}
