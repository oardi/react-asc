import React, { Fragment } from 'react';
import { Button, DropDown, DropDownDivider, DropDownItem, DropDownMenu, homeSolidSvg, loggerService, SvgIcon } from '../../lib';
import { withOptions } from './components';

const DropDownPageBase = () => {

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
							<SvgIcon svg={homeSolidSvg} />
							<span className="ml-2">
								Action
							</span>
						</DropDownItem>,
						<DropDownItem onClick={() => handleClick('2')}>
							Another Action
						</DropDownItem>,
						<DropDownDivider />,
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

export const DropDownPage = withOptions(DropDownPageBase);
