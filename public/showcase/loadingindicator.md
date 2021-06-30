import { Button, loadingIndicatorService } from '..';

const LoadingIndicatorExample = () => {
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
