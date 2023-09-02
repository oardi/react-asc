import type { IDrawerProps } from 'lib';
import { Button, Drawer, FormControl, loggerService } from 'lib';
import { useEffect, useState } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const CLASSNAME: string = 'ShowcaseDrawerBase';
const DrawerPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDrawerProps>): JSX.Element => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setSettingsControls({
			position: new FormControl(settingValues.position, [], 'select', {
				label: 'position',
				options: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
				],
			}),
			permanent: new FormControl(settingValues.permanent, [], 'checkbox', { label: 'permanent' }),
		});
	}, []);

	const handleClick = (): void => {
		loggerService.debug(CLASSNAME, 'handleClick');
		setIsVisible(!isVisible);
	};

	return (
		<>
			<Button onClick={(): void => handleClick()}>{!isVisible ? 'show' : 'hide'} drawer</Button>

			{isVisible && (
				<Drawer position={settingValues.position} permanent={settingValues.permanent} onClickBackdrop={handleClick}>
					some drawer content
				</Drawer>
			)}
		</>
	);
};

export const DrawerPage: () => JSX.Element = withOptions<IDrawerProps>(
	DrawerPageBase,
	{
		position: 'left',
		permanent: false,
	},
	'DrawerPageBase'
);
