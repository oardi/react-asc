import React, { useState } from 'react';
import { Button, COLOR, FormControl, IControls, loggerService, Modal, MODALBUTTONTYPE, modalService, VARIANT } from '../../lib';
import { withOptions } from './components';

const ModalPageBase = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleClickShowModal = () => {
		setIsVisible(!isVisible);
	}

	const handleClickTriggerModalService = () => {
		modalService.show('Hello Modal', 'Modal with custom buttons - using custom buttons make sure to attach Modalbuttontype for ok and cancel', {
			buttons: [
				{ label: 'delete', color: COLOR.accent, handler: customHandler },
				{ label: 'cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text },
				{ label: 'ok', type: MODALBUTTONTYPE.OK },
			]
		})
			.then(() => loggerService.debug('ok clicked')).catch(()=>{});
	}

	const customHandler = () => {
		console.warn('custom handler');
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

export const ModalPage = withOptions(ModalPageBase);
