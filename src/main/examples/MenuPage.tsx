import React, { useEffect, useState } from 'react';
import type { IMenuProps} from 'lib';
import { Button, Menu, MenuItem, FormControl, snackbarService, ListItemAvatar, ListItemText } from 'lib';
import { loggerService } from '../../shared';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';
import { UserCircleSolidIcon } from '../assets';

const MenuPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IMenuProps>): JSX.Element => {

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

	const handleClick = (text: string): void => {
		loggerService.debug('handleClick', text);
		setOpen(false);
		void snackbarService.show(`you clicked action ${text}`);
	};

	return (
		<>
			<Menu
				toggle={
					<Button onClick={(): void => setOpen(true)}>
						Menu Button
					</Button>
				}
				open={open}
				menuPosition={settingValues.menuPosition}
				onClickBackdrop={(): void => setOpen(false)}
			>
				<MenuItem onClick={(): void => handleClick('1')}>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</MenuItem>
				<MenuItem onClick={(): void => handleClick('2')}>
					Action 2
				</MenuItem>
				<MenuItem disabled onClick={(): void => handleClick('3')}>
					Action 3
				</MenuItem>
			</Menu>
		</>
	);
};

export const MenuPage: () => JSX.Element = withOptions<IMenuProps>(MenuPageBase, {
	menuPosition: 'left'
}, 'MenuPageBase');
