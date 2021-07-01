import React, { Fragment, useEffect } from 'react';
import { FormControl, ISelectProps, Select, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const SelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISelectProps>) => {

	useEffect(() => {
		setSettingsControls({
			multiple: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'multiple' }),
			multipleMaxCountItems: new FormControl(settingValues.multipleMaxCountItems, [], 'number', { label: 'max count items show (multiple)' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
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
				multipleMaxCountItems={settingValues.multipleMaxCountItems}
				options={[
					{ value: "1", label: 'one' },
					{ value: "2", label: 'two' },
					{ value: "3", label: 'three' },
					{ value: "4", label: 'four' },
					{ value: "5", label: 'five' },
					{ value: "6", label: 'six' },
					{ value: "7", label: 'seven' },
					{ value: "8", label: 'eight' },
					{ value: "9", label: 'nine' },
					{ value: "10", label: 'ten' },
					{ value: "11", label: 'eleven' },
					{ value: "12", label: 'twelve' },
					{ value: "13", label: 'thirteen' },
					{ value: "14", label: 'fourteen' },
					{ value: "15", label: 'fifteen' },
				]}
				onChange={handleOnChange}
				disabled={settingValues.disabled}
				value="2"
			/>
		</Fragment>
	);
}

export const SelectPage = withOptions<ISelectProps>(SelectPageBase, {
	multipleMaxCountItems: 5
}, 'SelectPageBase');
