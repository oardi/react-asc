import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext, IAppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import { IAppInfo } from './app.interfaces';

export const AppContainer = () => {

	useEffect(() => {
		setAppInfo({ name: packageJson.name, version: packageJson.version });
	}, []);

	const [appInfo, setAppInfo] = useState<IAppInfo>({});
	const appContext: IAppContext = ({
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
