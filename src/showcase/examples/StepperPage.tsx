import React, { useEffect } from 'react';
import { FormControl, IStepperProps, snackbarService, Step, Stepper, Typography } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPageBase';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
			isLinear: new FormControl(settingValues.isLinear, [], 'checkbox', { label: 'isLinear' }),
			showLabel: new FormControl(settingValues.showLabel, [], 'checkbox', { label: 'showLabel' }),
		});
	}, []);

	const handleOnChange = (index: number) => {
		snackbarService.show(`you selected step ${index + 1}`);
	}
	const handleOnFinish = () => {
		snackbarService.show('you reached the end');
	}

	return (
		<>
			<Typography as="h2">linear</Typography>
			<Typography as="h3">Badge only</Typography>
			<Stepper
				isLinear={settingValues.isLinear}
				showLabel={settingValues.showLabel}
				onChange={handleOnChange}
				onFinish={handleOnFinish}
			>
				<Step value="1" label="Step 1">
					Content 1
				</Step>
				<Step value="2" label="Step 2">
					Content 2
				</Step>
				<Step value="3" label="Step 3">
					Content 3
				</Step>
				<Step value="4" label="Step 4">
					Content 4
				</Step>
			</Stepper>
		</>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
	isLinear: false,
	showLabel: true,
}, CLASSNAME);
