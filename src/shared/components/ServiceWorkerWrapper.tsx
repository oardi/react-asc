import React, { useEffect } from 'react';
import { Snackbar } from '../../lib';
import * as serviceWorkerRegistration from '../../serviceWorkerRegistration';

export const ServiceWorkerWrapper = () => {
	const [showReload, setShowReload] = React.useState(false);
	const [waitingWorker, setWaitingWorker] = React.useState<ServiceWorker | null>(null);

	const onSWUpdate = (registration: ServiceWorkerRegistration) => {
		setShowReload(true);
		setWaitingWorker(registration.waiting);
	};

	useEffect(() => {
		serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
	}, []);

	const reloadPage = () => {
		setShowReload(false);
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload(true);
	};

	return (
		<>
			{showReload &&
				<div className="snackbar-container">
					<Snackbar
						message={'A new version is available!'}
						actionText={'reload'}
						onOk={reloadPage}
					/>
				</div>
			}
		</>
	);
}
