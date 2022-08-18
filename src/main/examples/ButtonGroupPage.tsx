import { Button, ButtonGroup, COLOR, FormControl, IButtonGroupProps, snackbarService } from 'lib';
import { useEffect } from 'react';
import { IShowcaseBaseProps, withOptions } from './components';

const ButtonGroupPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonGroupProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);


	const handleClick = (): void => {
		snackbarService.show('Button clicked');
	};

	return (
		<>
			<ButtonGroup
				color={settingValues.color}>
				<Button
					onClick={handleClick}
					shadow={false}>
					some button
				</Button>
				<Button
					onClick={handleClick}
					shadow={false}>
					some button
				</Button>
				<Button
					onClick={handleClick}
					shadow={false}>
					some button
				</Button>
			</ButtonGroup>
		</>
	);
};

export const ButtonGroupPage: () => JSX.Element = withOptions(ButtonGroupPageBase, {
	color: COLOR.primary
}, 'ButtonGroupPageBase');
