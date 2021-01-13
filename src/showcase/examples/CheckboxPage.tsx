import React, { useEffect, FocusEvent } from 'react';
import { FormControl, Checkbox, ICheckboxProps, loggerService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'ShowcaseCheckboxBase';
export const CheckboxPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ICheckboxProps>) => {

	useEffect(() => {
		setSettingsControls({
			checked: new FormControl(settingValues.checked, [], 'checkbox', { label: 'checked' }),
			label: new FormControl(settingValues.label, [], 'text', { label: 'label' })
		});
	}, []);

	const handleChange = (event: FocusEvent<HTMLInputElement>) => {
		loggerService.debug(CLASSNAME, 'handleCheck', event.target.checked);
	}

	return (
		<Checkbox
			checked={settingValues.checked}
			label={settingValues.label}
			onChange={handleChange}
		/>
	);
}

export const CheckboxPage = withOptions<ICheckboxProps>(CheckboxPageBase, {
	checked: true,
	label: 'my checkbox'
});
