import React, {  useState } from 'react';
import { Button, FormControl, IControls, loggerService, Modal, modalService } from '../../lib';
import { withOptions } from './components';

const ShowcaseModalBase = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleClickShowModal = () => {
		setIsVisible(!isVisible);
	}

	const handleClickTriggerModalService = () => {
		modalService.show('hello modal', 'some content')
			.then(() => loggerService.debug('ok clicked'));
	}

	const handleClickTriggerModalFormService = () => {
		const controls: IControls = {
			firstName: new FormControl('', ['required'], 'text', { label: 'Firstname', autoFocus: true, placeholder: 'Firstname' })
		};
		modalService.show('Form', null, { formControls: controls })
			.then(res => loggerService.debug(res));
	}

	return (
		<>
			<Button onClick={() => handleClickShowModal()}>
				show modal
			</Button>

			<Button onClick={() => handleClickTriggerModalService()}>
				trigger modal service
			</Button>

			<Button onClick={() => handleClickTriggerModalFormService()}>
				trigger modal service with form
			</Button>

			{
				isVisible &&
				<Modal>
					some modal
				</Modal>
			}
		</>
	);
}

export const ShowcaseModal = withOptions(ShowcaseModalBase);
