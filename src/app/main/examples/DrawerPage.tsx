import { useEffect, useState } from 'react';
import type { IDrawerProps } from 'src/lib';
import { Button, Drawer, FormControl } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const DrawerPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDrawerProps>): React.JSX.Element => {
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

export const DrawerPage: () => React.JSX.Element = withOptions<IDrawerProps>(
	DrawerPageBase,
	{
		position: 'left',
		permanent: false,
	},
	'DrawerPageBase'
);
