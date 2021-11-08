import React, { Fragment, useState } from 'react';
import { Button, COLOR, FormControl, IControls, Modal, MODALBUTTONTYPE, modalService, snackbarService, VARIANT } from '../../lib';
import { loggerService } from '../../shared';
import { withOptions } from './components';

const ModalPageBase = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleClickShowModal = () => {
		setIsVisible(!isVisible);
	}

	const handleClickTriggerModalService = (fullscreen?: boolean) => {
		modalService.show('Hello Modal', 'Modal with custom buttons - using custom buttons make sure to attach Modalbuttontype for ok and cancel', {
			buttons: [
				{ label: 'delete', color: COLOR.accent, handler: customHandler },
				{ label: 'cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text },
				{ label: 'ok', type: MODALBUTTONTYPE.OK, autoFocus: true },
			],
			fullScreen: fullscreen
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
			<div className="d-flex flex-wrap">
				<Button className="mr-2 mb-2" onClick={() => handleClickShowModal()}>
					show modal
				</Button>

				<Button className="mr-2 mb-2" onClick={() => handleClickTriggerModalService()}>
					modal with service
				</Button>

				<Button className="mr-2 mb-2" onClick={() => handleClickTriggerModalService(true)}>
					fullscreeen via service
				</Button>

				<Button className="mr-2" onClick={() => handleClickTriggerModalFormService()}>
					modal with form via service
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

export const ModalPage = withOptions(ModalPageBase, null, 'ModalPageBase');
