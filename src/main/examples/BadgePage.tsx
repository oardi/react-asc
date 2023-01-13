import { useEffect } from 'react';
import type { IBadgeProps } from 'lib';
import { Badge, COLOR, FormControl, HomeSolidIcon, Icon } from 'lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const BadgePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IBadgeProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			content: new FormControl(settingValues.content, [], 'text', { label: 'content' }),
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	return (
		<>
			<Badge color={settingValues.color} content={settingValues.content}>
				<Icon>
					<HomeSolidIcon />
				</Icon>
			</Badge>
		</>
	);
};

export const BadgePage: () => JSX.Element = withOptions<IBadgeProps>(
	BadgePageBase,
	{
		content: '10',
		color: COLOR.accent,
	},
	'BadgePageBase'
);
