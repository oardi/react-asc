import React, { useEffect } from 'react';
import { Alert, COLOR, FormControl, IAlertProps, VARIANT } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AlertPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAlertProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c }))
			}),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'shadow' }),
		});
	}, []);

	return (
		<>
			<Alert
				color={settingValues.color}
				variant={settingValues.variant}
				shadow={settingValues.shadow}
			>
				Some Alert
				{/* <AppBarTitle>Navbar</AppBarTitle> */}
				{/* <IconButton className="ml-auto" color={COLOR.light} icon={<HomeSolidIcon />} /> */}
			</Alert>
		</>
	);
};

export const AlertPage: () => JSX.Element = withOptions<IAlertProps>(AlertPageBase, {
	shadow: false,
	variant: VARIANT.contained,
	color: COLOR.primary
}, 'AlertPageBase');
