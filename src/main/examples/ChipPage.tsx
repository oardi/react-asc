import React, { useEffect } from 'react';
import { Chip, COLOR, FormControl, IChipProps, snackbarService } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';


const CLASSNAME: string = 'ShowcaseChipPageBase';
export const ChipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IChipProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', { label: 'color', options: Object.keys(COLOR).map(c => ({ label: c, value: c })) }),
			isDeletable: new FormControl(settingValues.isDeletable, [], 'checkbox', { label: 'isDeletable' }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'Shadow' }),
		});
	}, []);

	const handleClick = (): void => {
		loggerService.debug(CLASSNAME, 'handleClick');
		snackbarService.show('chip clicked');
	};

	return (
		<Chip
			color={settingValues.color}
			isDeletable={settingValues.isDeletable}
			shadow={settingValues.shadow}
			onClick={handleClick}
		>
			some label
		</Chip>
	);
};

export const ChipPage: () => JSX.Element = withOptions<IChipProps>(ChipPageBase, {
	color: COLOR.primary,
	shadow: false,
}, 'ChipPageBase');
