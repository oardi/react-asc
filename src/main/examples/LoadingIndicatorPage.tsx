import React, { useEffect } from 'react';
import { Button, ILoadingIndicatorProps, loadingIndicatorService } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

interface ILoadingIndicatorServiceProps extends ILoadingIndicatorProps {
}

const LoadingIndicatorPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ILoadingIndicatorServiceProps>) => {

	useEffect(() => {
		setSettingsControls({});
	}, []);

	const handleClick = () => {
		loadingIndicatorService.show();
		setTimeout(() => {
			loadingIndicatorService.hide();
		}, 1000);
	};

	return (
		<div>
			<Button onClick={handleClick}>
				show loading indicator
			</Button>
		</div>
	);
}

export const LoadingIndicatorPage = withOptions(LoadingIndicatorPageBase, null, 'LoadingIndicatorPageBase');

