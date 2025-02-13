import type { IChipProps } from 'lib';
import { Chip, Color, FormControl, loggerService, snackbarService } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const CLASSNAME: string = 'ShowcaseChipPageBase';
export const ChipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IChipProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
			isDeletable: new FormControl(settingValues.isDeletable, [], 'checkbox', { label: 'isDeletable' }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	const handleClick = (): void => {
		loggerService.debug(CLASSNAME, 'handleClick');
		void snackbarService.show('chip clicked');
	};

	return (
		<Chip color={settingValues.color} isDeletable={settingValues.isDeletable} shadow={settingValues.shadow} onClick={handleClick}>
			some label
		</Chip>
	);
};

export const ChipPage: () => JSX.Element = withOptions<IChipProps>(
	ChipPageBase,
	{
		color: Color.primary,
		shadow: false,
	},
	'ChipPageBase'
);
