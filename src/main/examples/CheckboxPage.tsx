import React, { useEffect, FocusEvent } from 'react';
import { FormControl, Checkbox, ICheckboxProps } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME: string = 'ShowcaseCheckboxBase';
export const CheckboxPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ICheckboxProps>) => {

	useEffect(() => {
		setSettingsControls({
			checked: new FormControl(settingValues.checked, [], 'checkbox', { label: 'checked' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			readOnly: new FormControl(settingValues.readOnly, [], 'checkbox', { label: 'readOnly' }),
			label: new FormControl(settingValues.label, [], 'text', { label: 'label' })
		});
	}, []);

	const handleChange = (event: FocusEvent<HTMLInputElement>) => {
		loggerService.debug(CLASSNAME, 'handleCheck', event.target.checked);
	};

	return (
		<Checkbox
			checked={settingValues.checked}
			disabled={settingValues.disabled}
			readOnly={settingValues.readOnly}
			label={settingValues.label}
			onChange={handleChange}
		/>
	);
};

export const CheckboxPage: () => JSX.Element = withOptions<ICheckboxProps>(CheckboxPageBase, {
	checked: true,
	label: 'my checkbox',
	readOnly: false,
	disabled: false
}, 'CheckboxPageBase');
