import React, { Fragment } from 'react';
import { List, ListItem, ListItemAvatar, HomeSolidIcon, ListItemAction, IconButton, ListItemText, ListItemIcon } from '../../lib';
import { UserCircleSolidIcon } from '../assets';
import { withOptions } from './components';

export const ListPageBase = () => {

	return (
		<Fragment>

			<h3>Single Line</h3>
			<List>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Two lines</h3>
			<List>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Avatar</h3>
			<List>
				<ListItem>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Icon</h3>
			<List>
				<ListItem>
					<ListItemIcon icon={<HomeSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Action Item</h3>
			<List>
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

export const ListPage = withOptions(ListPageBase);
