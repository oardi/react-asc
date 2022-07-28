// default Modal

const MyModalPage = () => {

	const [isVisible, setIsVisible] = useState(false);

	return (
		<Button onClick={() => setIsVisible(!isVisible)}>
			show modal
		</Button>

		{isVisible &&
			<Modal
				header="Modal Header"
				onHeaderCloseClick={() => setIsVisible(!isVisible)}
			>
				some modal content
			</Modal>
		}
	);
}


// with modalService

import { Button, modalService } from 'react-asc';

const ModalExample = () => {

	const handleClick = () => {
		modalService.show('some title', 'some content')
			.then(() => 
				// ok clicked
			)
			.catch(() => {
				// cancel clicked
			});
	};

	return (
		<Button onClick={handleClick}>
			show modal
		</Button>
	);
}

