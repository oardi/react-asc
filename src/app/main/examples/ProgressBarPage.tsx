import { useEffect } from 'react';
import type { IProgressBarProps } from 'src/lib';
import { Color, FormControl, ProgressBar } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const ProgressBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IProgressBarProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
			value: new FormControl(settingValues.value, ['min:0', 'max:100'], 'number', {
				label: 'value',
				hint: 'number from 0 to 100',
			}),
			indeterminate: new FormControl(settingValues.indeterminate, [], 'checkbox', {
				label: 'indeterminate',
				hint: 'showing an indicator while something is not finished or will take longer',
			}),
		});
	}, []);

	return (
		<>
			<ProgressBar color={settingValues.color} value={settingValues.value} indeterminate={settingValues.indeterminate} />
		</>
	);
};

export const ProgressBarPage: () => React.JSX.Element = withOptions<IProgressBarProps>(
	ProgressBarPageBase,
	{
		color: Color.primary,
		value: 10,
	},
	'ProgressBarPageBase'
);
