import React, { useEffect, useState } from 'react';
import { FormControl, INumberSelectProps, NumberSelect, snackbarService } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const NumberSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<INumberSelectProps>): JSX.Element => {

	const [value, setValue] = useState<number>(settingValues.from as number);

	useEffect(() => {
		setSettingsControls({
			from: new FormControl(settingValues.from, [], 'number', { label: 'From', hint: 'start value' }),
			to: new FormControl(settingValues.to, [], 'number', { label: 'To', hint: 'end value' }),
		});
	}, []);

	useEffect(() => {
		setValue(settingValues.from as number);
	}, [settingValues.from]);

	const handleOnChange = (e: number): void => {
		snackbarService.show(`You selected: ${e}`);
		setValue(e);
	};

	return (
		<>
			<NumberSelect
				name="myNumberSelect"
				id="selectNumber"
				from={settingValues.from}
				to={settingValues.to}
				value={value}
				onChange={handleOnChange}
			/>
		</>
	);
};

export const NumberSelectPage: () => JSX.Element = withOptions<INumberSelectProps>(NumberSelectPageBase, {
	from: 0,
	to: 100
}, 'NumberSelectPageBase');
