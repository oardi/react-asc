import { Button, ButtonGroup, snackbarService } from 'lib';
import { withOptions } from './components';

const ButtonGroupPageBase = () => {

	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

	return (
		<>
			<ButtonGroup>
				<Button onClick={handleClick}>some button</Button>
				<Button onClick={handleClick}>some button</Button>
				<Button onClick={handleClick}>some button</Button>
			</ButtonGroup>
		</>
	);
}

export const ButtonGroupPage = withOptions(ButtonGroupPageBase, undefined, 'ButtonGroupPageBase');
