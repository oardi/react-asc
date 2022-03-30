import React, { useEffect, useState } from 'react';
import { Button, Drawer, FormControl, IDrawerProps } from 'lib';
import { loggerService } from '../../shared';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'ShowcaseDrawerBase';
const DrawerPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDrawerProps>) => {

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setSettingsControls({
			position: new FormControl(settingValues.position, [], 'select', { label: 'position', options: [{ label: 'left', value: 'left' }, { label: 'right', value: 'right' }] }),
			permanent: new FormControl(settingValues.permanent, [], 'checkbox', { label: 'permanent' }),
		});
	}, []);

	const handleClick = () => {
		loggerService.debug(CLASSNAME, 'handleClick');
		setIsVisible(!isVisible);
	}

	return (
		<>
			<Button onClick={() => handleClick()}>
				{!isVisible ? 'show' : 'hide'} drawer
			</Button>

			{isVisible &&
				<Drawer
					position={settingValues.position}
					permanent={settingValues.permanent}
					onClickBackdrop={handleClick}
				>
					some drawer content
				</Drawer>
			}
		</>
	);
}

export const DrawerPage = withOptions<IDrawerProps>(DrawerPageBase, {
	position: 'left',
	permanent: false
}, 'DrawerPageBase');
