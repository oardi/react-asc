import React, { Fragment } from 'react';
import {
	List, ListItem, ListItemAvatar, homeSolidSvg, ListItemAction, IconButton, DropDown, DropDownItem, DropDownMenu, ListItemText, snackbarService
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

			<h3>simple list</h3>
			<List>
				<ListItem><ListItemText>lorem ipsum</ListItemText></ListItem>
				<ListItem><ListItemText>lorem ipsum</ListItemText></ListItem>
				<ListItem><ListItemText>lorem ipsum</ListItemText></ListItem>
				<ListItem><ListItemText>lorem ipsum</ListItemText></ListItem>
			</List>

			<h3 className="mt-3">extended</h3>
			<List>
				<ListItem onClick={handleClickItem}>
					<ListItemAvatar avatar={homeSolidSvg} />

					<ListItemText>lorem ipsum</ListItemText>

					<ListItemAction>
						<DropDown toggle={<IconButton icon={homeSolidSvg} />}>
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
