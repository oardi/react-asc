import React, { Fragment, useEffect } from 'react';
import { FormControl, IAppBarProps, ISelectOption, ISelectProps, Select, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const SelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISelectProps>) => {

	useEffect(() => {
		setSettingsControls({
			multiple: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'multiple' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			getValueAsObject: new FormControl(settingValues.getValueAsObject, [], 'checkbox', { label: 'getValueAsObject' }),
		});
	}, []);

	const handleOnChange = (e: string | ISelectOption) => {
		console.warn(e);

		// if (settingValues.multiple) {
		// 	const { selectedOptions } = (e.target as HTMLSelectElement);
		// 	const values = selectedOptions && Array.from(selectedOptions, (option) => (option as any).value);
		// 	snackbarService.show(`value change ${JSON.stringify(values)}`);
		// } else {
		// }

		snackbarService.show(`value change "${JSON.stringify(e)}"`);
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
					{ value: "2", label: 'second' },
					{ value: "3", label: 'third' },
				]}
				onChange={handleOnChange}
				disabled={settingValues.disabled}
				getValueAsObject={settingValues.getValueAsObject}
				value="2"
			/>
		</Fragment>
	);
}

export const SelectPage = withOptions<IAppBarProps>(SelectPageBase, {
});
