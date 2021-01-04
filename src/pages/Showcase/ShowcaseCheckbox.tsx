import React, { useContext, useEffect, FocusEvent } from 'react';
import { AppContext } from '../../AppContext';
import { FormControl, Checkbox, ICheckboxProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

export const ShowcaseCheckboxBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ICheckboxProps>) => {

	const { loggerService } = useContext(AppContext);

	useEffect(() => {
		setSettingsControls({
			checked: new FormControl(settingValues.checked, [], 'checkbox', { label: 'checked' }),
			label: new FormControl(settingValues.label, [], 'text', { label: 'label' })
		});
	}, []);

	const handleChange = (val: FocusEvent<HTMLInputElement>) => {
		loggerService.debug('handleCheck', val);
	}

	return (
		<Checkbox
			checked={settingValues.checked}
			label={settingValues.label}
			onChange={handleChange}
		/>
	);
}

export const ShowcaseCheckbox = withOptions<ICheckboxProps>(ShowcaseCheckboxBase, {
	checked: true,
	label: 'my checkbox'
});
