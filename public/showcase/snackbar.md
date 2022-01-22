import { Button, COLOR, snackbarService } from 'react-asc';

const SnackbarExample = () => {

	const handleClick = () => {
		snackbarService
			.show(settingValues.message, {
				actionText: settingValues.actionText,
				timeout: settingValues.timeout,
				color: settingValues.color
			})
			.then(() => loggerService.debug('onOk clicked'));
	};

	return (
		<div>
			<Button onClick={handleClick}>
				show snackbar
			</Button>
		</div>
	);
}
