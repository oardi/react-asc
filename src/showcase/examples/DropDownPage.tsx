import React, { Fragment, useEffect } from 'react';
import { Button, DropDown, DropDownDivider, DropDownItem, FormControl, IDropDownProps, snackbarService } from '../../lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const DropDownPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDropDownProps>) => {

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
			<DropDown
				toggle={<Button>Dropdown button</Button>}
				menuPosition={settingValues.menuPosition}
			>
				<DropDownItem type="header">
					This is a header
				</DropDownItem>
				<DropDownDivider />
				<DropDownItem onClick={() => handleClick('1')}>
					Action 1
				</DropDownItem>
				<DropDownItem onClick={() => handleClick('2')}>
					Action 2
				</DropDownItem>
				<DropDownItem onClick={() => handleClick('3')}>
					Action 3
				</DropDownItem>
			</DropDown>
		</Fragment>
	);
}

export const DropDownPage = withOptions<IDropDownProps>(DropDownPageBase, {
	menuPosition: 'left'
}, 'DropDownPageBase');
