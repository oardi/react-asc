import React, { useEffect } from 'react';
import { IStepperProps, snackbarService, Step, Stepper, Typography } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'StepperPageBase';
const StepperPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IStepperProps>) => {

	useEffect(() => {
		setSettingsControls({
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
				onChange={handleOnChange}
				onFinish={handleOnFinish}
			>
				<Step value="1" />
				<Step value="2" />
				<Step value="3" />
				<Step value="4" />
			</Stepper>

			<Typography as="h3">Badge + Label</Typography>
			<Stepper
				onChange={handleOnChange}
				onFinish={handleOnFinish}>
				<Step label="step 1" value="1" />
				<Step label="step 2" value="2" />
				<Step label="step 3" value="3" />
				<Step label="step 4" value="4" />
			</Stepper>


			<Typography as="h2">Non-linear</Typography>
			<Typography as="h3">Badge only</Typography>
			<Stepper
				isLinear={false}
				onChange={handleOnChange}
				onFinish={handleOnFinish}
			>
				<Step value="1" />
				<Step value="2" />
				<Step value="3" />
				<Step value="4" />
			</Stepper>

			<Typography as="h3">Badge + Label</Typography>
			<Stepper
				isLinear={false}
				onChange={handleOnChange}
				onFinish={handleOnFinish}>
				<Step label="step 1" value="1" />
				<Step label="step 2" value="2" />
				<Step label="step 3" value="3" />
				<Step label="step 4" value="4" />
			</Stepper>
		</>
	);
}

export const StepperPage = withOptions<IStepperProps>(StepperPageBase, {
}, CLASSNAME);
