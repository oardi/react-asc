import React, { Fragment, useEffect, useState } from 'react';
import { AutoComplete, FormControl, IAutoCompleteProps, ISelectOption, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const AutoCompletePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAutoCompleteProps>) => {

	const [options, setOptions] = useState<Array<ISelectOption>>([]);
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		setSettingsControls({
			openOnFocus: new FormControl(settingValues.openOnFocus, [], 'checkbox', { label: 'openOnFocus' }),
			debounce: new FormControl(settingValues.debounce, [], 'number', { label: 'debounce' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnSelect = (e: ISelectOption) => {
		snackbarService.show(`value changed: ${e.label}`);
	}

	const handleOnChange = (e: string | undefined) => {
		setValue(e as string);

		const oldOptions = options;
		const newOptions: Array<ISelectOption> = [
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
		];

		const filteredNewOptions = newOptions.filter(option => oldOptions.map(o => o.value).indexOf(option.value) < 0);
		setOptions(options.concat(filteredNewOptions));
	}

	return (
		<Fragment>
			<AutoComplete
				id="myAutoComplete"
				name="myAutoComplete"
				className="form-control"
				options={options}
				openOnFocus={settingValues.openOnFocus}
				debounce={settingValues.debounce}
				disabled={settingValues.disabled}
				onSelect={handleOnSelect}
				onChange={handleOnChange}
				value={value}
			/>
		</Fragment>
	);
}

export const AutoCompletePage = withOptions<IAutoCompleteProps>(AutoCompletePageBase, {
	debounce: 250,
	openOnFocus: false,
}, 'AutoCompletePageBase');
