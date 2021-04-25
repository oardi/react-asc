import React, { Fragment, useEffect } from 'react';
import { FormControl, IAppBarProps, ISelectProps, Select, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const SelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISelectProps>) => {

	useEffect(() => {
		setSettingsControls({
			multiple: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'multiple' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' })
		});
	}, []);

	const handleOnChange = (e: string | Array<string>) => {
		snackbarService.show(`value changed: ${e}`);
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
				value="2"
			/>
		</Fragment>
	);
}

export const SelectPage = withOptions<IAppBarProps>(SelectPageBase, {
});
