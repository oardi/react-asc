import React, { Fragment, useEffect, useState } from 'react';
import { Button, Drawer, FormControl, IDrawerProps, loggerService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'ShowcaseDrawerBase';
const DrawerPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDrawerProps>) => {

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setSettingsControls({
			position: new FormControl(settingValues.position, [], 'select', { label: 'position', options: [{ label: 'left', value: 'left' }, { label: 'right', value: 'right' }] }),
		});
	}, []);

	const handleClick = () => {
		loggerService.debug(CLASSNAME, 'handleClick');
		setIsVisible(!isVisible);
	}

	return (
		<Fragment>
			<Button onClick={() => handleClick()}>
				show drawer
			</Button>

			{isVisible &&
				<Drawer
					position={settingValues.position}
					onClickBackdrop={handleClick}
				>
					some drawer content
				</Drawer>
			}
		</Fragment>
	);
}

export const DrawerPage = withOptions<IDrawerProps>(DrawerPageBase, {
	position: 'left'
});
