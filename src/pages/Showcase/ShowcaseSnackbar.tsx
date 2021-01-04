import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Button, SnackbarService } from '../../lib';
import { withOptions } from './components';

const ShowcaseSnackbarBase = () => {

	const snackbarService = new SnackbarService();
	const { loggerService } = useContext(AppContext);

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
