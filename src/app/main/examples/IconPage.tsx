import { useEffect } from 'react';
import type { IIconProps } from 'src/lib';
import { Color, FormControl, HomeSolidIcon, Icon } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const IconPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IIconProps>): React.JSX.Element => {
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

export const IconPage: () => React.JSX.Element = withOptions<IIconProps>(
	IconPageBase,
	{
		iconColor: Color.primary,
	},
	'IconPageBase'
);
