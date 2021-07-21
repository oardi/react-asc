import React, { useEffect } from 'react';
import { IStepperProps, Step, Stepper, Typography } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPageBase';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<>
			<Typography as="h2">Non-linear</Typography>
			<Typography as="h3">Badge only</Typography>
			<Stepper>
				<Step value="1" />
				<Step value="2" />
			</Stepper>

			<Typography as="h3">Badge + Label</Typography>
			<Stepper>
				<Step label="step 1" value="1" />
				<Step label="step 2" value="2" />
			</Stepper>
		</>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
}, CLASSNAME);
