import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { AppContainer } from './AppContainer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
	<Suspense fallback={<div>Loading...</div>}>
		<React.StrictMode>
			<AppContainer />
		</React.StrictMode>
	</Suspense>
);
