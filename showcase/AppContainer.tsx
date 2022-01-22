import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { AppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import { snackbarService, modalService } from '../src/lib';
import { IAppInfo } from './app.interfaces';
import { fileLoaderService } from './shared';

export const AppContainer = () => {

	useEffect(() => {
		setAppInfo({ name: packageJson.name, version: packageJson.version });
	}, []);

	const [appInfo, setAppInfo] = useState<IAppInfo>({});
	const appContext = ({
		fileLoaderService,
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
