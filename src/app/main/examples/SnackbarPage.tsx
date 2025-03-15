import React, { useEffect } from 'react';
import type { ISnackbarProps } from 'src/lib';
import { Button, Color, FormControl, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

interface ISnackbarServiceProps extends ISnackbarProps {
	timeout: number;
}

const SnackbarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISnackbarServiceProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			children: new FormControl(settingValues.children, [], 'text', { label: 'Message' }),
			actionText: new FormControl(settingValues.actionText, [], 'text', { label: 'Actiontext' }),
			timeout: new FormControl(settingValues.timeout, [], 'number', { label: 'timeout' }),
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
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
			// eslint-disable-next-line no-console
			.then(() => console.debug('onOk clicked'));
	};

	return (
		<>
			<Button onClick={handleClick}>show snackbar</Button>
		</>
	);
};

export const SnackbarPage: () => React.JSX.Element = withOptions<ISnackbarServiceProps>(
	SnackbarPageBase,
	{
		children: 'snackbar message',
		actionText: 'ok',
		color: Color.dark,
		timeout: 3000,
	},
	'SnackbarPageBase'
);
