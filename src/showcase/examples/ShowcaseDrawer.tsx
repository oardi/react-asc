import React, { useEffect, useState } from 'react';
import { Button, Drawer, FormControl, IDrawerProps, loggerService } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'ShowcaseDrawerBase';
const ShowcaseDrawerBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDrawerProps>) => {

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
		<>
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
		</>
	);
}

export const ShowcaseDrawer = withOptions<IDrawerProps>(ShowcaseDrawerBase, {
	position: 'left'
});
