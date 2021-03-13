import React, { Fragment } from 'react';
import {
	List, ListItem, ListItemAvatar, HomeSolidIcon, ListItemAction, IconButton, DropDown, DropDownItem, ListItemText, snackbarService
} from '../../lib';
import { withOptions } from './components';

export const ListPageBase = () => {

	const handleClickItem = () => {
		snackbarService.show('Item clicked');
	}

	const handleClickDropDownItem = () => {
		snackbarService.show('DropdownItem clicked');
	}

	return (
		<Fragment>

			<h3>Single Line</h3>
			<List>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="lorem ipsum" /></ListItem>
			</List>

			<h3>Two lines</h3>
			<List>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">extended</h3>
			<List>
				<ListItem onClick={handleClickItem}>
					<ListItemAvatar avatar={<HomeSolidIcon />} />

					<ListItemText primary="lorem ipsum" />

					<ListItemAction>
						<DropDown menuPosition="right" toggle={<IconButton icon={<HomeSolidIcon />} />}>
							<DropDownItem onClick={handleClickDropDownItem}>
								test 1
							</DropDownItem>
							<DropDownItem onClick={handleClickDropDownItem}>
								test 2
							</DropDownItem>
						</DropDown>
					</ListItemAction>
				</ListItem>
			</List>
		</Fragment>
	);
}

export const ListPage = withOptions(ListPageBase);
