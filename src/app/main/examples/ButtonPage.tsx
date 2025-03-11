import { useEffect } from 'react';
import type { IButtonProps } from 'src/lib';
import { Button, Color, FormControl, snackbarService, VARIANT } from 'src/lib';
import { InfoSolidIcon } from '../assets';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

interface IButtonExampleProps extends IButtonProps {
	showStartIcon?: boolean;
	showEndIcon?: boolean;
}

const ButtonPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonExampleProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			color: new FormControl(settingValues.color, [], 'select', {
				label: 'color',
				options: Object.keys(Color).map(c => ({ label: c, value: c })),
			}),
			variant: new FormControl(settingValues.variant, [], 'select', {
				label: 'variant',
				options: Object.keys(VARIANT).map(c => ({ label: c, value: c })),
			}),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', {
				label: 'disabled',
				hint: 'whether the tag is disabled or enabled',
			}),
			block: new FormControl(settingValues.block, [], 'checkbox', { label: 'block' }),
			isActive: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isActive' }),
			isRounded: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'isRounded' }),
			loading: new FormControl(settingValues.loading, [], 'checkbox', { label: 'loading' }),
			showStartIcon: new FormControl(settingValues.showStartIcon, [], 'checkbox', { label: 'showStartIcon' }),
			showEndIcon: new FormControl(settingValues.showEndIcon, [], 'checkbox', { label: 'showEndIcon' }),
			shadow: new FormControl(settingValues.shadow, [], 'checkbox', { label: 'shadow' }),
		});
	}, []);

	const handleClick = (): void => {
		void snackbarService.show('Button clicked');
	};

	return (
		<>
			<Button
				color={settingValues.color}
				disabled={settingValues.disabled}
				block={settingValues.block}
				loading={settingValues.loading}
				isActive={settingValues.isActive}
				isRounded={settingValues.isRounded}
				variant={settingValues.variant}
				onClick={handleClick}
				startIcon={settingValues.showStartIcon ? <InfoSolidIcon /> : undefined}
				endIcon={settingValues.showEndIcon ? <InfoSolidIcon /> : undefined}
				shadow={settingValues.shadow}>
				some button text
			</Button>
		</>
	);
};

export const ButtonPage: () => React.JSX.Element = withOptions<IButtonExampleProps>(
	ButtonPageBase,
	{
		color: Color.primary,
		variant: VARIANT.contained,
		shadow: true,
	},
	'ButtonPageBase'
);
