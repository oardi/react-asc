import React, { useEffect } from 'react';
import { List, IListProps, ListItem, ListItemAvatar, HomeSolidIcon, ListItemAction, IconButton, ListItemText, ListItemIcon, snackbarService, COLOR, VARIANT } from 'lib';
import { UserCircleSolidIcon } from '../assets';
import { IShowcaseBaseProps, withOptions } from './components';

export const ListPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IListProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			// isHoverable: new FormControl(settingValues.isHoverable, [], 'checkbox', { label: 'isHoverable' }),
			// isFlush: new FormControl(settingValues.isFlush, [], 'checkbox', { label: 'isFlush' })
		});
	}, []);

	const handleClickItem = (): void => {
		snackbarService.show('item clicked');
	};

	const handleClickAction = (e: React.MouseEvent): void => {
		e.stopPropagation();
		snackbarService.show('action clicked');
	};

	return (
		<>

			<h3>Single Line</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem} disabled={true}>
					<ListItemText primary="disabled" />
				</ListItem>
			</List>

			<h3 className="mt-3">Two lines</h3>
			<List isFlush={settingValues.isFlush}>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" />
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="1st lorem ipsum" secondary="2nd lorem ipsum" />
				</ListItem>
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
						<IconButton onClick={handleClickAction} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton color={COLOR.primary} onClick={handleClickAction} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemText primary="lorem ipsum" />
					<ListItemAction>
						<IconButton color={COLOR.accent} variant={VARIANT.text} onClick={handleClickAction} icon={<HomeSolidIcon />} />
					</ListItemAction>
				</ListItem>
				<ListItem onClick={handleClickItem}>
					<ListItemAction>
						<IconButton onClick={handleClickAction} icon={<HomeSolidIcon />} />
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

		</>
	);
};

export const ListPage: () => JSX.Element = withOptions<IListProps>(ListPageBase, {
	isFlush: false
}, 'ListPageBase');
