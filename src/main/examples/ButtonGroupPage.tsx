import { Button, ButtonGroup, COLOR, FormControl, IButtonGroupProps, snackbarService } from 'lib';
import { useEffect } from 'react';
import { IShowcaseBaseProps, withOptions } from './components';

const ButtonGroupPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonGroupProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
		});
	}, []);


	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

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
}

export const ButtonGroupPage = withOptions(ButtonGroupPageBase, {
	color: COLOR.primary
}, 'ButtonGroupPageBase');
