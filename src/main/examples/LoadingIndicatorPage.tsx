import type { ILoadingIndicatorContainerProps } from 'lib';
import { Button, FormControl, LoadingIndicator, LoadingIndicatorContainer, loadingIndicatorService } from 'lib';
import { useEffect, useState } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const TimeOutDefault: number = 1000;

const LoadingIndicatorPageBase = ({
	settingValues,
	setSettingsControls,
}: IShowcaseBaseProps<ILoadingIndicatorContainerProps>): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		setSettingsControls({
			isFixed: new FormControl(settingValues.isFixed, [], 'checkbox', { label: 'isFixed' }),
		});
	}, []);

	const handleClick = (): void => {
		setIsVisible(true);
		setTimeout(() => {
			setIsVisible(false);
		}, TimeOutDefault);
	};

	const handleClickByService = (): void => {
		loadingIndicatorService.show();
		setTimeout(() => {
			loadingIndicatorService.hide();
		}, TimeOutDefault);
	};

	return (
		<>
			{isVisible && (
				<LoadingIndicatorContainer isFixed={settingValues.isFixed}>
					<LoadingIndicator />
				</LoadingIndicatorContainer>
			)}

			<Button onClick={handleClick}>show loading indicator</Button>

			<Button onClick={handleClickByService}>show loading indicator by service</Button>
		</>
	);
};

export const LoadingIndicatorPage: () => JSX.Element = withOptions(LoadingIndicatorPageBase, undefined, 'LoadingIndicatorPageBase');
