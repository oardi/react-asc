import React, { Fragment } from 'react';
import { Button, DropDown, DropDownDivider, DropDownItem, snackbarService } from '../../lib';
import { loggerService } from '../../shared';
import { withOptions } from './components';

const DropDownPageBase = () => {

	const handleClick = (text: string) => {
		loggerService.debug('handleClick', text);
		snackbarService.show(`you clicked action ${text}`);
	}

	return (
		<Fragment>
			<DropDown toggle={<Button>Dropdown button</Button>}>
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

export const DropDownPage = withOptions(DropDownPageBase, null, 'DropDownPageBase');
