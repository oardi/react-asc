import { Button, FormControl, ILoadingIndicatorContainerProps, LoadingIndicator, LoadingIndicatorContainer, loadingIndicatorService } from 'lib';
import { useEffect, useState } from 'react';
import { IShowcaseBaseProps, withOptions } from './components';

const LoadingIndicatorPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ILoadingIndicatorContainerProps>) => {

	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		setSettingsControls({
			isFixed: new FormControl(settingValues.isFixed, [], 'checkbox', { label: 'isFixed' }),
		});
	}, []);

	const handleClick = () => {
		setIsVisible(true);
		setTimeout(() => {
			setIsVisible(false);
		}, 1000);
	};

	const handleClickByService = () => {
		loadingIndicatorService.show();
		setTimeout(() => {
			loadingIndicatorService.hide();
		}, 1000);
	};

	return (
		<>
			{isVisible &&
				<LoadingIndicatorContainer
					isFixed={settingValues.isFixed}>
					<LoadingIndicator />
				</LoadingIndicatorContainer>
			}

			<Button onClick={handleClick}>
				show loading indicator
			</Button>


			<Button onClick={handleClickByService}>
				show loading indicator by service
			</Button>
		</>
	);
};

export const LoadingIndicatorPage = withOptions(LoadingIndicatorPageBase, undefined, 'LoadingIndicatorPageBase');

