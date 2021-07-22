import React, { useEffect } from 'react';
import { FormControl, IStepperProps, snackbarService, Step, Stepper } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPageBase';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
			isLinear: new FormControl(settingValues.isLinear, [], 'checkbox', { label: 'isLinear' }),
			showLabel: new FormControl(settingValues.showLabel, [], 'checkbox', { label: 'showLabel' }),
			showProgressCheckIcon: new FormControl(settingValues.showProgressCheckIcon, [], 'checkbox', { label: 'showProgressCheckIcon' }),
		});
	}, []);

	const handleOnChange = (index: number) => {
		snackbarService.show(`you selected step ${index + 1}`);
	}
	const handleOnFinish = () => {
		snackbarService.show('you reached the end');
	}

	return (
		<Stepper
			isLinear={settingValues.isLinear}
			showLabel={settingValues.showLabel}
			showProgressCheckIcon={settingValues.showProgressCheckIcon}
			onChange={handleOnChange}
			onFinish={handleOnFinish}
		>
			<Step value="1" label="Step 1">
				Content 1 Content 1 Content 1
			</Step>
			<Step value="2" label="Step 2">
				Content 2 Content 2 Content 2<br />
				Content 2 Content 2 Content 2
			</Step>
			<Step value="3" label="Step 3">
				Content 3 Content 3 Content 3<br />
				Content 3 Content 3 Content 3<br />
				Content 3 Content 3 Content 3
			</Step>
			<Step value="4" label="Step 4">
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4
			</Step>
		</Stepper>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
	isLinear: false,
	showLabel: true,
	showProgressCheckIcon: false,
}, CLASSNAME);
