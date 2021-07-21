import React, { useEffect } from 'react';
import { IStepperProps, Step, Stepper } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPageBase';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<>
			<Stepper>
				<Step label="step 1" value="1" />
				<Step label="step 2" value="2" />
			</Stepper>
		</>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
}, CLASSNAME);
