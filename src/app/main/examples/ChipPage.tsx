import { useEffect } from 'react';
import type { IChipProps } from 'src/lib';
import { Chip, Color, FormControl, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

export const ChipPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IChipProps>): React.JSX.Element => {
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
		void snackbarService.show('chip clicked');
	};

	return (
		<Chip color={settingValues.color} isDeletable={settingValues.isDeletable} shadow={settingValues.shadow} onClick={handleClick}>
			some label
		</Chip>
	);
};

export const ChipPage: () => React.JSX.Element = withOptions<IChipProps>(
	ChipPageBase,
	{
		color: Color.primary,
		shadow: false,
	},
	'ChipPageBase'
);
