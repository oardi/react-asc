import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import { snackbarService, modalService } from 'lib';
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
		<BrowserRouter>
			<AppContext.Provider value={appContext}>
				<App />
			</AppContext.Provider>
		</BrowserRouter>
	);
};
