import { Button, modalService } from 'react-asc';

const ModalExample = () => {

	const handleClick = () => {
		modalService.show('some title', 'some content')
			.then(() => alert('modal confirmed'));
	};

	return (
		<div>
			<Button onClick={handleClick}>
				show modal
			</Button>
		</div>
	);
}
