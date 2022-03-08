import { Button, loadingIndicatorService } from 'lib';
import { withOptions } from './components';

const LoadingIndicatorPageBase = () => {

	const handleClick = () => {
		loadingIndicatorService.show();
		setTimeout(() => {
			loadingIndicatorService.hide();
		}, 1000);
	};

	return (
		<Button onClick={handleClick}>
			show loading indicator
		</Button>
	);
}

export const LoadingIndicatorPage = withOptions(LoadingIndicatorPageBase, undefined, 'LoadingIndicatorPageBase');

