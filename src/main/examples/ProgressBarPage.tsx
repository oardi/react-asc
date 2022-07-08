import React, { useEffect } from 'react';
import { COLOR, FormControl, IProgressBarProps, ProgressBar } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const ProgressBarPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IProgressBarProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c }))
			}),
			value: new FormControl(settingValues.value, ['max:100'], 'number', {
				label: 'value',
				hint: 'number from 0 to 100'
			}),
			indeterminate: new FormControl(settingValues.indeterminate, [], 'checkbox', {
				label: 'indeterminate',
				hint: 'showing an indicator while something is not finished or will take longer'
			}),
		});
	}, []);

	return (
		<>
			<ProgressBar
				color={settingValues.color}
				value={settingValues.value}
				indeterminate={settingValues.indeterminate}
			/>
		</>
	);
}

export const ProgressBarPage = withOptions<IProgressBarProps>(ProgressBarPageBase, {
	color: COLOR.primary,
	value: 10
}, 'ProgressBarPageBase');
