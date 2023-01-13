import React, { useEffect, useState } from 'react';
import type { IAutoCompleteProps, ISelectOption } from 'lib';
import { AutoComplete, FormControl, snackbarService } from 'lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

interface IMyCustomData {
	id: string;
	label: string;
	description: string;
}

const AutoCompletePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IAutoCompleteProps>): JSX.Element => {
	const [options, setOptions] = useState<ISelectOption[]>([]);
	const [value, setValue] = useState<string>('');

	useEffect(() => {
		setSettingsControls({
			openOnFocus: new FormControl(settingValues.openOnFocus, [], 'checkbox', { label: 'openOnFocus' }),
			debounce: new FormControl(settingValues.debounce, [], 'number', { label: 'debounce' }),
			placeholder: new FormControl(settingValues.placeholder, [], 'text', { label: 'placeholder' }),
			showClearButton: new FormControl(settingValues.showClearButton, [], 'checkbox', { label: 'showClearButton' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			readOnly: new FormControl(settingValues.readOnly, [], 'checkbox', { label: 'readOnly' }),
		});
	}, []);

	const newOptions: IMyCustomData[] = [
		{ id: '1', label: 'one', description: '1' },
		{ id: '2', label: 'two', description: '2' },
		{ id: '3', label: 'three', description: '3' },
		{ id: '4', label: 'four', description: '4' },
		{ id: '5', label: 'five', description: '5' },
		{ id: '6', label: 'six', description: '6' },
		{ id: '7', label: 'seven', description: '7' },
		{ id: '8', label: 'eight', description: '8' },
		{ id: '9', label: 'nine', description: '9' },
		{ id: '10', label: 'ten', description: '10' },
		{ id: '11', label: 'eleven', description: '11' },
		{ id: '12', label: 'twelve', description: '12' },
		{ id: '13', label: 'thirteen', description: '13' },
		{ id: '14', label: 'fourteen', description: '14' },
		{ id: '15', label: 'fifteen', description: '15' },
		{ id: '16', label: 'sixteen', description: '16' },
		{ id: '17', label: 'seventeen', description: '17' },
		{ id: '18', label: 'eighteen', description: '18' },
		{ id: '19', label: 'nineteen', description: '19' },
		{ id: '20', label: 'twenty', description: '20' },
	];

	const handleOnSelect = (e: ISelectOption): void => {
		void snackbarService.show(`value changed: ${e.label}`);
	};

	const handleOnChange = (val: string | undefined): void => {
		setValue(val as string);
		const regex: RegExp = new RegExp(val as string, 'gi');
		const filteredOptions: IMyCustomData[] = newOptions.filter(
			option => (val && option?.label?.match(regex)) || option?.description?.match(regex)
		);
		setOptions(filteredOptions.map(o => ({ value: o.id, label: o.label })));
	};

	return (
		<>
			<AutoComplete
				id="myAutoComplete"
				name="myAutoComplete"
				options={options}
				openOnFocus={settingValues.openOnFocus}
				debounce={settingValues.debounce}
				disabled={settingValues.disabled}
				readOnly={settingValues.readOnly}
				placeholder={settingValues.placeholder}
				showClearButton={settingValues.showClearButton}
				onSelect={handleOnSelect}
				onChange={handleOnChange}
				value={value}
			/>
		</>
	);
};

export const AutoCompletePage: () => JSX.Element = withOptions<IAutoCompleteProps>(
	AutoCompletePageBase,
	{
		debounce: 250,
		openOnFocus: false,
		placeholder: 'search...',
	},
	'AutoCompletePageBase'
);
