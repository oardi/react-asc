import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { AppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import { FileLoaderService } from './shared/services/fileLoader.service';
import { LoggerService, ModalService, SnackbarService } from './lib';
import { IAppInfo } from './app.interfaces';

const CLASSNAME = 'AppContainer';
export const AppContainer = () => {

	useEffect(() => { setAppInfo({ name: packageJson.name, version: packageJson.version }); }, []);

	const [appInfo, setAppInfo] = useState<IAppInfo>(null);
	const loggerService = new LoggerService();
	const fileLoaderService = new FileLoaderService(loggerService);
	const snackbarService = new SnackbarService();
	const modalService = new ModalService();
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
