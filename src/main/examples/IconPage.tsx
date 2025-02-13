import type { IIconProps } from 'lib';
import { Color, FormControl, HomeSolidIcon, Icon } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const IconPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			iconColor: new FormControl(settingValues.iconColor, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	return (
		<>
			<Icon iconColor={settingValues.iconColor}>
				<HomeSolidIcon />
			</Icon>
		</>
	);
};

export const IconPage: () => JSX.Element = withOptions<IIconProps>(
	IconPageBase,
	{
		iconColor: Color.primary,
	},
	'IconPageBase'
);
