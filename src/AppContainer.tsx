import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import type { IAppContext } from './AppContext';
import { AppContext } from './AppContext';

import packageJson from '../package.json' assert { type: 'json' };
import type { IAppInfo } from './app.interfaces';

export const AppContainer = (): JSX.Element => {
	useEffect(() => {
		setAppInfo({ name: packageJson.name, version: packageJson.version });
	}, []);

	const [appInfo, setAppInfo] = useState<IAppInfo>({});
	const appContext: IAppContext = {
		appInfo: appInfo,
		setAppInfo: setAppInfo,
	};

	return (
		<BrowserRouter>
			<AppContext.Provider value={appContext}>
				<App />
			</AppContext.Provider>
		</BrowserRouter>
	);
};
