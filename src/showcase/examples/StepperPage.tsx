import React, { useEffect } from 'react';
import { IStepperProps, Step, Stepper } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPage';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<div>
			<Stepper>
				<Step>

					step 1
				</Step>
			</Stepper>
		</div>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
}, 'StepperPage');
