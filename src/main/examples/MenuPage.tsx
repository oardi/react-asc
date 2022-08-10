import React, { useEffect, useState } from 'react';
import { Button, Menu, MenuItem, FormControl, IMenuProps, snackbarService, ListItemAvatar, ListItemText } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';
import { UserCircleSolidIcon } from '../assets';

const MenuPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IMenuProps>) => {

	const [open, setOpen] = useState(false);

	useEffect(() => {
		setSettingsControls({
			menuPosition: new FormControl('left', [], 'select', {
				label: 'menuPosition', options: [
					{ value: 'left', label: 'left' },
					{ value: 'right', label: 'right' }
				]
			})
		});
	}, []);

	const handleClick = (text: string) => {
		loggerService.debug('handleClick', text);
		setOpen(false);
		snackbarService.show(`you clicked action ${text}`);
	};

	return (
		<>
			<Menu
				toggle={
					<Button onClick={() => setOpen(true)}>
						Menu Button
					</Button>
				}
				open={open}
				menuPosition={settingValues.menuPosition}
				onClickBackdrop={() => setOpen(false)}
			>
				<MenuItem onClick={() => handleClick('1')}>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</MenuItem>
				<MenuItem onClick={() => handleClick('2')}>
					Action 2
				</MenuItem>
				<MenuItem disabled onClick={() => handleClick('3')}>
					Action 3
				</MenuItem>
			</Menu>
		</>
	);
};

export const MenuPage = withOptions<IMenuProps>(MenuPageBase, {
	menuPosition: 'left'
}, 'MenuPageBase');
