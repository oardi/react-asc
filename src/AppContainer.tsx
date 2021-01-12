import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { AppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import { loggerService, snackbarService, modalService } from './lib';
import { IAppInfo } from './app.interfaces';
import { fileLoaderService } from './shared';

const CLASSNAME = 'AppContainer';
export const AppContainer = () => {

	useEffect(() => {
		setAppInfo({ name: packageJson.name, version: packageJson.version });
	}, []);

	const [appInfo, setAppInfo] = useState<IAppInfo>(null);
	const appContext = ({
		fileLoaderService,
		loggerService,
		snackbarService,
		modalService,
		appInfo,
		setAppInfo
	});

	return (
		<Router>
			<AppContext.Provider value={appContext}>
				<App />
			</AppContext.Provider>
		</Router>
	);
}
