import React from 'react';
import { Snackbar, useConstructor } from 'lib';
// import * as serviceWorkerRegistration from '../../serviceWorkerRegistration';
import { registerSW } from 'virtual:pwa-register';

export const ServiceWorkerWrapper = () => {
	const [showReload, setShowReload] = React.useState(false);
	const [waitingWorker] = React.useState<ServiceWorker | null>(null);

	// const onSWUpdate = (registration: ServiceWorkerRegistration) => {
	// 	setShowReload(true);
	// 	setWaitingWorker(registration.waiting);
	// };

	useConstructor(() => {
		registerSW();
	});

	const reloadPage = () => {
		setShowReload(false);
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload();
	};

	return (
		<>
			{showReload &&
				<div className="snackbar-container">
					<Snackbar
						actionText={'reload'}
						onOk={reloadPage}
					>
						A new version is available!
					</Snackbar>
				</div>
			}
		</>
	);
}
