import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { AppContainer } from './AppContainer';

ReactDOM.render(
	<Suspense fallback={<div>Loading...</div>}>
		<React.StrictMode>
			<AppContainer />
		</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
