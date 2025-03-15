import { useEffect } from 'react';
import type { IFloatingActionButtonProps } from 'src/lib';
import { Color, FloatingActionButton, FormControl, HomeSolidIcon, SIZE, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const FloatingActionButtonPageBase = ({
	settingValues,
	setSettingsControls,
}: IShowcaseBaseProps<IFloatingActionButtonProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map((c: string) => ({ label: c, value: c })),
			}),
			fixed: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'fixed' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			size: new FormControl(settingValues.size, [], 'select', {
				label: 'size',
				options: Object.keys(SIZE).map((c: string) => ({ label: c, value: c })),
			}),
		});
	}, []);

	const handleClick = (): void => {
		void snackbarService.show('FloatingActionButton clicked');
	};

	return (
		<>
			<FloatingActionButton
				color={settingValues.color}
				fixed={settingValues.fixed}
				size={settingValues.size}
				isActive={settingValues.isActive}
				disabled={settingValues.disabled}
				icon={<HomeSolidIcon />}
				onClick={handleClick}
			/>
		</>
	);
};

export const FloatingActionButtonPage: () => React.JSX.Element = withOptions<IFloatingActionButtonProps>(
	FloatingActionButtonPageBase,
	{
		color: Color.primary,
		size: SIZE.lg,
	},
	'FloatingActionButtonPageBase'
);
