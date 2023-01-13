import React, { useEffect } from 'react';
import type { ISnackbarProps } from 'lib';
import { Button, COLOR, FormControl, snackbarService } from 'lib';
import { loggerService } from '../../shared';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

interface ISnackbarServiceProps extends ISnackbarProps {
	timeout: number;
}

const SnackbarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISnackbarServiceProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			children: new FormControl(settingValues.children, [], 'text', { label: 'Message' }),
			actionText: new FormControl(settingValues.actionText, [], 'text', { label: 'Actiontext' }),
			timeout: new FormControl(settingValues.timeout, [], 'number', { label: 'timeout' }),
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	const handleClick = (): void => {
		void snackbarService
			.show(settingValues.children as React.ReactNode, {
				actionText: settingValues.actionText,
				timeout: settingValues.timeout,
				color: settingValues.color,
			})
			.then(() => loggerService.debug('onOk clicked'));
	};

	return (
		<>
			<Button onClick={handleClick}>show snackbar</Button>
		</>
	);
};

export const SnackbarPage: () => JSX.Element = withOptions<ISnackbarServiceProps>(
	SnackbarPageBase,
	{
		children: 'snackbar message',
		actionText: 'ok',
		color: COLOR.dark,
		timeout: 3000,
	},
	'SnackbarPageBase'
);
