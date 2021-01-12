import React from 'react';
import { Button, loggerService, snackbarService } from '../../lib';
import { withOptions } from './components';

const ShowcaseSnackbarBase = () => {

	const handleClick = () => {
		snackbarService.show('jojo').then(() => loggerService.debug('onOk clicked'));
	};

	return (
		<div>
			<Button onClick={handleClick}>
				show snackbar
			</Button>
		</div>
	);
}

export const ShowcaseSnackbar = withOptions(ShowcaseSnackbarBase);
