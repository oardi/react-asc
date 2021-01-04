import React, { Fragment, useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { Button, COLOR, FormControl, IButtonProps, VARIANT } from '../../lib';
import { withOptions } from './components';
import { IShowcaseBaseProps } from './components';

const ShowcaseButtonBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonProps>) => {

	const { snackbarService } = useContext(AppContext);

	useEffect(() => {
		setSettingsControls({
			block: new FormControl(settingValues.block, [], 'checkbox', { label: 'block' }),
			className: new FormControl(settingValues.className, [], 'text', { label: 'className', placeholder: 'css class' }),
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			isRounded: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isRounded' }),
			variant: new FormControl(settingValues.variant, [], 'select', { label: 'variant', options: Object.keys(VARIANT).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

	return (
		<Fragment>

			<Button
				block={settingValues.block}
				color={settingValues.color}
				className={settingValues.className}
				disabled={settingValues.disabled}
				isActive={settingValues.isActive}
				isRounded={settingValues.isRounded}
				variant={settingValues.variant}
				onClick={handleClick}
			>
				some button text
			</Button>

		</Fragment>
	);
}

export const ShowcaseButton = withOptions<IButtonProps>(ShowcaseButtonBase, {
	color: COLOR.primary,
	variant: VARIANT.normal
});
