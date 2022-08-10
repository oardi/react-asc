import React, { Suspense } from 'react';
import { createRoot, Root } from 'react-dom/client';
import './index.scss';
import { AppContainer } from './AppContainer';

const rootElement: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(rootElement as HTMLElement);

root.render(
	<Suspense fallback={<div>Loading...</div>}>
		<React.StrictMode>
			<AppContainer />
		</React.StrictMode>
	</Suspense>
);
