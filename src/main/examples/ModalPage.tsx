import React, { useEffect, useState } from 'react';
import type { IControls, IModalProps } from 'lib';
import { Button, COLOR, FormControl, Modal, MODALBUTTONTYPE, modalService, SIZE, snackbarService, VARIANT } from 'lib';
import { loggerService } from '../../shared';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

interface IModalPageValues {
	firstname: string;
	select: string;
	selectMultiple: string[];
	autoComplete: string;
}

const ModalPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IModalProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			size: new FormControl(SIZE.md, [], 'select', { label: 'size', options: Object.keys(SIZE).map(c => ({ label: c, value: c })) }),
		});
	}, []);

	const [isVisible, setIsVisible] = useState(false);

	const handleClickShowModal = (): void => {
		setIsVisible(!isVisible);
	};

	const handleClickTriggerModalService = (fullscreen?: boolean): void => {
		void modalService.show('Hello Modal', 'Modal with custom buttons - using custom buttons make sure to attach Modalbuttontype for ok and cancel', {
			buttons: [
				{ label: 'delete', color: COLOR.accent, handler: customHandler },
				{ label: 'cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text },
				{ label: 'ok', type: MODALBUTTONTYPE.OK, autoFocus: true },
			],
			fullScreen: fullscreen,
			size: settingValues.size
		})
			.then(() => loggerService.debug('ok clicked'));
	};

	const customHandler = (): void => {
		void snackbarService.show('custom handler triggered');
	};

	const handleClickTriggerModalFormService = (): void => {
		const controls: IControls = {
			firstName: new FormControl('', ['required'], 'text', { label: 'Firstname', autoFocus: true, placeholder: 'Firstname' }),
			select: new FormControl('option2', [], 'select', {
				label: 'Select',
				options: [
					{ value: '1', label: 'one' },
					{ value: '2', label: 'two' },
					{ value: '3', label: 'three' },
					{ value: '4', label: 'four' },
					{ value: '5', label: 'five' },
					{ value: '6', label: 'six' },
					{ value: '7', label: 'seven' },
					{ value: '8', label: 'eight' },
					{ value: '9', label: 'nine' },
					{ value: '10', label: 'ten' },
					{ value: '11', label: 'eleven' },
					{ value: '12', label: 'twelve' },
					{ value: '13', label: 'thirteen' },
					{ value: '14', label: 'fourteen' },
					{ value: '15', label: 'fifteen' },
					{ value: '16', label: 'sixteen' },
					{ value: '17', label: 'seventeen' },
					{ value: '18', label: 'eighteen' },
					{ value: '19', label: 'nineteen' },
					{ value: '20', label: 'twenty' },
				]
			}),
			selectMultiple: new FormControl(['option2'], [], 'select', {
				label: 'Select multiple',
				options: [
					{ value: '1', label: 'one' },
					{ value: '2', label: 'two' },
					{ value: '3', label: 'three' },
					{ value: '4', label: 'four' },
					{ value: '5', label: 'five' },
					{ value: '6', label: 'six' },
					{ value: '7', label: 'seven' },
					{ value: '8', label: 'eight' },
					{ value: '9', label: 'nine' },
					{ value: '10', label: 'ten' },
					{ value: '11', label: 'eleven' },
					{ value: '12', label: 'twelve' },
					{ value: '13', label: 'thirteen' },
					{ value: '14', label: 'fourteen' },
					{ value: '15', label: 'fifteen' },
					{ value: '16', label: 'sixteen' },
					{ value: '17', label: 'seventeen' },
					{ value: '18', label: 'eighteen' },
					{ value: '19', label: 'nineteen' },
					{ value: '20', label: 'twenty' },
				],
				selectOptions: { multiple: true }
			}),
			autoComplete: new FormControl('', [], 'autocomplete', {
				label: 'Autocomplete',
				options: [
					{ value: '1', label: 'one' },
					{ value: '2', label: 'two' },
					{ value: '3', label: 'three' },
					{ value: '4', label: 'four' },
					{ value: '5', label: 'five' },
					{ value: '6', label: 'six' },
					{ value: '7', label: 'seven' },
					{ value: '8', label: 'eight' },
					{ value: '9', label: 'nine' },
					{ value: '10', label: 'ten' },
					{ value: '11', label: 'eleven' },
					{ value: '12', label: 'twelve' },
					{ value: '13', label: 'thirteen' },
					{ value: '14', label: 'fourteen' },
					{ value: '15', label: 'fifteen' },
					{ value: '16', label: 'sixteen' },
					{ value: '17', label: 'seventeen' },
					{ value: '18', label: 'eighteen' },
					{ value: '19', label: 'nineteen' },
					{ value: '20', label: 'twenty' },
				]
			})
		};

		void modalService.showForm<IModalPageValues>('Form', controls, { size: settingValues.size })
			.then(res => {
				loggerService.debug(res);
			});
	};

	return (
		<>
			<div className="d-flex flex-wrap">
				<Button className="mr-2 mb-2" onClick={(): void => handleClickShowModal()}>
					show modal
				</Button>

				<Button className="mr-2 mb-2" onClick={(): void => handleClickTriggerModalService()}>
					modal with service
				</Button>

				<Button className="mr-2 mb-2" onClick={(): void => handleClickTriggerModalService(true)}>
					fullscreeen via service
				</Button>

				<Button className="mr-2" onClick={(): void => handleClickTriggerModalFormService()}>
					modal with form via service
				</Button>

				{
					isVisible &&
					<Modal
						header="Modal Header"
						size={settingValues.size}
						isDismissable={true}
						onHeaderCloseClick={(): void => setIsVisible(!isVisible)}
					>
						some modal content
					</Modal>
				}
			</div>
		</>
	);
};

export const ModalPage: () => JSX.Element = withOptions(ModalPageBase, undefined, 'ModalPageBase');
