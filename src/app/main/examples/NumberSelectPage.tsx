import { useEffect, useState } from 'react';
import type { INumberSelectProps } from 'src/lib';
import { FormControl, NumberSelect, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const NumberSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<INumberSelectProps>): React.JSX.Element => {
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
		void snackbarService.show(`You selected: ${e}`);
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

export const NumberSelectPage: () => React.JSX.Element = withOptions<INumberSelectProps>(
	NumberSelectPageBase,
	{
		from: 0,
		to: 100,
	},
	'NumberSelectPageBase'
);
