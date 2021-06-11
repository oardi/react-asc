import React, { Fragment, useEffect } from 'react';
import { Badge, COLOR, FormControl, IBadgeProps, HomeSolidIcon, SvgIcon } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const BadgePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IBadgeProps>) => {

	useEffect(() => {
		setSettingsControls({
			content: new FormControl(settingValues.content, [], 'text', { label: 'content' }),
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(COLOR).map(c => ({ label: c, value: c }))
			}),
		});
	}, []);

	return (
		<Fragment>
			<Badge
				color={settingValues.color}
				content={settingValues.content}
			>
				<SvgIcon>
					<HomeSolidIcon />
				</SvgIcon>
			</Badge>
		</Fragment>
	);
}

export const BadgePage = withOptions<IBadgeProps>(BadgePageBase, {
	content: '10',
	color: COLOR.accent
});
