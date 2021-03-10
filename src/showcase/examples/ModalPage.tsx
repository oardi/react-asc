import React, { Fragment, useState } from 'react';
import { Button, COLOR, FormControl, IControls, loggerService, Modal, MODALBUTTONTYPE, modalService, snackbarService, VARIANT } from '../../lib';
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
				{ label: 'ok', type: MODALBUTTONTYPE.OK, autoFocus: true },
			]
		})
			.then(() => loggerService.debug('ok clicked')).catch(() => { });
	}

	const customHandler = () => {
		snackbarService.show('custom handler triggered');
	}

	const handleClickTriggerModalFormService = () => {
		const controls: IControls = {
			firstName: new FormControl('', ['required'], 'text', { label: 'Firstname', autoFocus: true, placeholder: 'Firstname' })
		};
		modalService.show('Form', '', { formControls: controls })
			.then(res => loggerService.debug(res)).catch(() => { });
	}

	return (
		<Fragment>
			<div className="d-flex justify-content-between">
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
					<Modal
						header="Modal Header"
						isDismissable={true}
						onHeaderCloseClick={() => setIsVisible(!isVisible)}
					>
						some modal content
				</Modal>
				}
			</div>
		</Fragment>
	);
}

export const ModalPage = withOptions(ModalPageBase);
