import React, { Fragment, useEffect } from 'react';
import { FormControl, IAppBarProps, ISelectProps, Select, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const SelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISelectProps>) => {

	useEffect(() => {
		setSettingsControls({
			multiple: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'multiple' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnChange = (e: Event) => {
		let { type, target } = e;

		console.warn(type);

		if (settingValues.multiple) {
			const { selectedOptions } = (e.target as HTMLSelectElement);
			const values = selectedOptions && Array.from(selectedOptions, (option) => (option as any).value);
			snackbarService.show(`value change ${JSON.stringify(values)}`);
		} else {
			snackbarService.show(`value change ${JSON.stringify((target as any).value)}`);
		}
	}

	return (
		<Fragment>
			<Select
				id="myselect"
				name="myselect"
				className="form-control"
				multiple={settingValues.multiple}
				options={[
					{ value: "1", label: 'first' },
					{ value: "2", label: 'second' }
				]}
				onChange={handleOnChange}
				disabled={settingValues.disabled}
				value="1"
			/>
		</Fragment>
	);
}

export const SelectPage = withOptions<IAppBarProps>(SelectPageBase, {
});
