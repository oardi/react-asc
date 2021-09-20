import React, { Fragment, useEffect } from 'react';
import { Button, Menu, MenuDivider, MenuItem, FormControl, IMenuProps, snackbarService } from '../../lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const MenuPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IMenuProps>) => {

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
		snackbarService.show(`you clicked action ${text}`);
	}

	return (
		<Fragment>
			<Menu
				toggle={<Button>Menu Button</Button>}
				menuPosition={settingValues.menuPosition}
			>
				<MenuItem type="header">
					This is a header
				</MenuItem>
				<MenuDivider />
				<MenuItem onClick={() => handleClick('1')}>
					Action 1
				</MenuItem>
				<MenuItem onClick={() => handleClick('2')}>
					Action 2
				</MenuItem>
				<MenuItem onClick={() => handleClick('3')}>
					Action 3
				</MenuItem>
			</Menu>
		</Fragment>
	);
}

export const MenuPage = withOptions<IMenuProps>(MenuPageBase, {
	menuPosition: 'left'
}, 'MenuPageBase');
