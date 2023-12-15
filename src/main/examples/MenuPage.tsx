import type { IMenuProps } from 'lib';
import { Button, FormControl, ListItemAvatar, ListItemText, Menu, MenuItem, loggerService, snackbarService } from 'lib';
import { useEffect, useState } from 'react';
import { UserCircleSolidIcon } from '../assets';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const MenuPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IMenuProps>): JSX.Element => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setSettingsControls({
			menuPosition: new FormControl('left', [], 'select', {
				label: 'menuPosition',
				options: [
					{ value: 'left', label: 'left' },
					{ value: 'right', label: 'right' },
					{ value: 'bottom', label: 'bottom' },
					{ value: 'top', label: 'top' },
				],
			}),
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
				toggle={<Button onClick={(): void => setOpen(true)}>Menu Button</Button>}
				open={open}
				menuPosition={settingValues.menuPosition}
				onClickBackdrop={(): void => setOpen(false)}>
				<MenuItem onClick={(): void => handleClick('1')}>
					<ListItemAvatar avatar={<UserCircleSolidIcon />} />
					<ListItemText primary="lorem ipsum" />
				</MenuItem>
				<MenuItem onClick={(): void => handleClick('2')}>Action 2</MenuItem>
				<MenuItem disabled onClick={(): void => handleClick('3')}>
					Action 3
				</MenuItem>
			</Menu>
		</>
	);
};

export const MenuPage: () => JSX.Element = withOptions<IMenuProps>(
	MenuPageBase,
	{
		menuPosition: 'left',
	},
	'MenuPageBase'
);
