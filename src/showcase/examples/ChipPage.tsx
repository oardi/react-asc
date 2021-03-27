import React, { useEffect } from 'react';
import { Chip, COLOR, FormControl, IChipProps, loggerService, snackbarService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';


const CLASSNAME = 'ShowcaseChipPageBase';
export const ChipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IChipProps>) => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	const handleClick = (event: MouseEvent) => {
		loggerService.debug(CLASSNAME, 'handleClick');
		snackbarService.show('chip clicked');
	}

	return (
		<Chip
			color={settingValues.color}
			shadow={settingValues.shadow}
			onClick={handleClick}
		>
			some label
		</Chip>
	);
}

export const ChipPage = withOptions<IChipProps>(ChipPageBase, {
	color: COLOR.primary,
	shadow: false,
});
