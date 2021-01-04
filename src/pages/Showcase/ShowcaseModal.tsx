import React, { Fragment, useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { Button, FormControl, IControls, Modal, ModalService } from '../../lib';
import { withOptions } from './components';

const ShowcaseModalBase = () => {

	const modalService = new ModalService();

	const [isVisible, setIsVisible] = useState(false);
	const { loggerService } = useContext(AppContext);

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
		<Fragment>
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
				<Modal onBackdropClick={() => handleClickShowModal()}>
					some modal
				</Modal>
			}
		</Fragment>
	);
}

export const ShowcaseModal = withOptions(ShowcaseModalBase);
