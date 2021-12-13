import React, { Fragment, useEffect } from 'react';
import { List, IListProps, ListItem, ListItemAvatar, HomeSolidIcon, ListItemAction, IconButton, ListItemText, ListItemIcon, snackbarService, COLOR, VARIANT } from '../../lib';
import { UserCircleSolidIcon } from '../assets';
import { IShowcaseBaseProps, withOptions } from './components';

export const ListPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IListProps>) => {

	useEffect(() => {
		setSettingsControls({
			// isHoverable: new FormControl(settingValues.isHoverable, [], 'checkbox', { label: 'isHoverable' }),
			// isFlush: new FormControl(settingValues.isFlush, [], 'checkbox', { label: 'isFlush' })
		});
	}, []);

	const handleClickItem = () => {
		snackbarService.show('item clicked');
	}

	const handleClickAction = (e: React.MouseEvent) => {
		e.stopPropagation();
		snackbarService.show('action clicked');
	}

	return (
		<Fragment>

			<h3>Single Line</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Two lines</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
				<ListItem onClick={handleClickItem}><ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" /></ListItem>
			</List>

			<h3 className="mt-3">Avatar</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemAvatar avatar={<span>2</span>} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Icon</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}>
					<ListItemIcon icon={<HomeSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Action Item</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton onClick={e => handleClickAction(e as any)} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton color={COLOR.primary} onClick={e => handleClickAction(e as any)} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton color={COLOR.accent} variant={VARIANT.text} onClick={e => handleClickAction(e as any)} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemAction>
						<IconButton onClick={e => handleClickAction(e as any)} icon={<HomeSolidIcon />} />
					</ListItemAction>
					<ListItemText primary="lorem ipsum" />
				</ListItem>
			</List>

			<h3 className="mt-3">Colors</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem color={COLOR.primary}>primary</ListItem>
				<ListItem color={COLOR.accent}>accent</ListItem>
				<ListItem color={COLOR.secondary}>secondary</ListItem>
				<ListItem color={COLOR.light}>light</ListItem>
				<ListItem color={COLOR.dark}>dark</ListItem>
			</List>

		</Fragment>
	);
}

export const ListPage = withOptions<IListProps>(ListPageBase, {
	isFlush: false
}, 'ListPageBase');
