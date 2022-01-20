## react-scripts pwa show "new version"

# remove registration from index.ts

```js
// serviceWorkerRegistration.register();
```

# add ServiceWorkerWrapper
create FC in shared and add to App

```js
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

```
