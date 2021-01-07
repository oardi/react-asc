import React, { Fragment, useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Button, DropDown, DropDownItem, DropDownMenu } from '../../lib';
import { withOptions } from './components';

const ShowcaseDropDownBase = () => {

	const { loggerService } = useContext(AppContext);

	const handleClick = (text: string) => {
		loggerService.debug('handleClick', text);
	}

	return (
		<Fragment>

			<DropDown
				toggle={
					<Button>
						Dropdown button
					</Button>
				}
				menu={
					<DropDownMenu items={[
						<DropDownItem onClick={() => handleClick('1')}>
							Action
						</DropDownItem>,
						<DropDownItem onClick={() => handleClick('2')}>
							Another Action
						</DropDownItem>,
						<DropDownItem onClick={() => handleClick('3')}>
							Something
						</DropDownItem>
					]}>
					</DropDownMenu>
				}
			/>

		</Fragment>
	);
}

export const ShowcaseDropDown = withOptions(ShowcaseDropDownBase);
