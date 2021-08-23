import React, { Fragment, useEffect, useState } from 'react';
import { AutoComplete, FormControl, IAutoCompleteProps, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AutoCompletePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAutoCompleteProps>) => {

	const [value, setValue] = useState<string>('');

	useEffect(() => {
		setSettingsControls({
			openOnFocus: new FormControl(settingValues.openOnFocus, [], 'checkbox', { label: 'openOnFocus' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnChange = (e: string | Array<string>) => {
		snackbarService.show(`value changed: ${e}`);
		setValue(e as string);
	}

	return (
		<Fragment>
			<AutoComplete
				id="myAutoComplete"
				name="myAutoComplete"
				className="form-control"
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
					{ value: "16", label: 'sixteen' },
					{ value: "17", label: 'seventeen' },
					{ value: "18", label: 'eighteen' },
					{ value: "19", label: 'nineteen' },
					{ value: "20", label: 'twenty' },
				]}
				openOnFocus={settingValues.openOnFocus}
				disabled={settingValues.disabled}
				onChange={handleOnChange}
				value={value}
			/>
		</Fragment>
	);
}

export const AutoCompletePage = withOptions<IAutoCompleteProps>(AutoCompletePageBase, {
	openOnFocus: true
}, 'AutoCompletePageBase');
