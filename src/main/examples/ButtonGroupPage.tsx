import type { IButtonGroupProps } from 'lib';
import { Button, ButtonGroup, Color, FormControl, snackbarService } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const ButtonGroupPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonGroupProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	const handleClick = (): void => {
		void snackbarService.show('Button clicked');
	};

	return (
		<>
			<ButtonGroup color={settingValues.color}>
				<Button onClick={handleClick} shadow={false}>
					some button
				</Button>
				<Button onClick={handleClick} shadow={false}>
					some button
				</Button>
				<Button onClick={handleClick} shadow={false}>
					some button
				</Button>
			</ButtonGroup>
		</>
	);
};

export const ButtonGroupPage: () => JSX.Element = withOptions(
	ButtonGroupPageBase,
	{
		color: Color.primary,
	},
	'ButtonGroupPageBase'
);
