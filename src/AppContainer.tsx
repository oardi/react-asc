import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { IAppContext } from './AppContext';
import { AppContext } from './AppContext';
import App from './App';

import packageJson from '../package.json';
import type { IAppInfo } from './app.interfaces';

export const AppContainer = (): JSX.Element => {

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
