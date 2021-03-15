import React, { Fragment, useEffect } from 'react';
import { List, IListProps, ListItem, ListItemAvatar, HomeSolidIcon, ListItemAction, IconButton, ListItemText, ListItemIcon, FormControl } from '../../lib';
import { UserCircleSolidIcon } from '../assets';
import { IShowcaseBaseProps, withOptions } from './components';

export const ListPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IListProps>) => {

	useEffect(() => {
		setSettingsControls({
			isHoverable: new FormControl(settingValues.isHoverable, [], 'checkbox', { label: 'isHoverable' }),
			isFlush: new FormControl(settingValues.isFlush, [], 'checkbox', { label: 'isFlush' })
		});
	}, []);

	return (
		<Fragment>

			<h3>Single Line</h3>
			<List isFlush={settingValues.isFlush} isHoverable={settingValues.isHoverable}>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Two lines</h3>
			<List isFlush={settingValues.isFlush} isHoverable={settingValues.isHoverable}>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Avatar</h3>
			<List isFlush={settingValues.isFlush} isHoverable={settingValues.isHoverable}>
				<ListItem>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Icon</h3>
			<List isFlush={settingValues.isFlush} isHoverable={settingValues.isHoverable}>
				<ListItem>
					<ListItemIcon icon={<HomeSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Action Item</h3>
			<List isFlush={settingValues.isFlush} isHoverable={settingValues.isHoverable}>
				<ListItem>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
			</List>

		</Fragment>
	);
}

export const ListPage = withOptions<IListProps>(ListPageBase, {
	isHoverable: false,
	isFlush: false
});
