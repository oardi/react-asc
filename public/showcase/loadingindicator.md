// default

const [isVisible, setIsVisible] = useState<boolean>(false);

return (
	<>
		{isVisible &&
			<LoadingIndicatorContainer>
				<LoadingIndicator />
			</LoadingIndicatorContainer>
		}

		<Button onClick={() => setIsVisible(true)}>
			show loading indicator
		</Button>
	</>
)


// by service
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
