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
	const [isVisibleFullscreen, setIsVisibleFullscreen] = useState(false);

	const handleClickShowModal = (): void => {
		setIsVisible(!isVisible);
	};

	const handleClickTriggerModalService = (fullscreen?: boolean): void => {
		void modalService
			.show('Hello Modal', 'Modal with custom buttons - using custom buttons make sure to attach Modalbuttontype for ok and cancel', {
				buttons: [
					{ label: 'delete', color: COLOR.accent, handler: customHandler },
					{ label: 'cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text },
					{ label: 'ok', type: MODALBUTTONTYPE.OK, autoFocus: true },
				],
				fullScreen: fullscreen,
				size: settingValues.size,
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
				],
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
				selectOptions: { multiple: true },
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
				],
			}),
		};

		void modalService.showForm<IModalPageValues>('Form', controls, { size: settingValues.size }).then(res => {
			loggerService.debug(res);
		});
	};

	return (
		<>
			<div className="d-flex flex-wrap">
				<Button className="mr-2 mb-2" onClick={(): void => handleClickShowModal()}>
					show modal
				</Button>
				<Button className="mr-2 mb-2" onClick={(): void => setIsVisibleFullscreen(true)}>
					show fullscreen modal
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

				{isVisible && (
					<Modal
						header="Modal Header"
						size={settingValues.size}
						isDismissable={true}
						onHeaderCloseClick={(): void => setIsVisible(!isVisible)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua.Curabitur vitae nunc sed velit dignissim sodales ut eu.Dignissim suspendisse in est ante in nibh mauris
						cursus mattis.Viverra maecenas accumsan lacus vel facilisis.Aliquam ultrices sagittis orci a.Mauris in aliquam sem
						fringilla ut morbi tincidunt augue interdum.Ipsum consequat nisl vel pretium.Amet venenatis urna cursus eget nunc
						scelerisque.Senectus et netus et malesuada.Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.Lorem donec
						massa sapien faucibus et molestie ac feugiat sed.Cras pulvinar mattis nunc sed blandit libero volutpat sed cras.Nec
						feugiat nisl pretium fusce id velit ut. Ut sem nulla pharetra diam sit amet nisl suscipit.Faucibus et molestie ac
						feugiat.Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.Mi proin sed libero enim sed.Nibh sit amet
						commodo nulla facilisi nullam.Donec et odio pellentesque diam volutpat commodo sed egestas egestas.Faucibus et
						molestie ac feugiat sed lectus vestibulum mattis.Imperdiet dui accumsan sit amet.Urna duis convallis convallis
						tellus id interdum velit laoreet id.Adipiscing bibendum est ultricies integer quis.At augue eget arcu dictum varius
						duis at consectetur lorem.Risus nec feugiat in fermentum posuere urna.Elit ut aliquam purus sit amet luctus
						venenatis lectus magna.Vulputate enim nulla aliquet porttitor.Cras fermentum odio eu feugiat pretium nibh ipsum.Nisl
						purus in mollis nunc sed.
					</Modal>
				)}

				{isVisibleFullscreen && (
					<Modal
						header="Modal Header"
						fullScreen={true}
						isDismissable={true}
						footer={
							<>
								<Button onClick={(): void => setIsVisibleFullscreen(false)}>ok</Button>
							</>
						}
						onHeaderCloseClick={(): void => setIsVisibleFullscreen(!isVisibleFullscreen)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua.Curabitur vitae nunc sed velit dignissim sodales ut eu.Dignissim suspendisse in est ante in nibh mauris
						cursus mattis.Viverra maecenas accumsan lacus vel facilisis.Aliquam ultrices sagittis orci a.Mauris in aliquam sem
						fringilla ut morbi tincidunt augue interdum.Ipsum consequat nisl vel pretium.Amet venenatis urna cursus eget nunc
						scelerisque.Senectus et netus et malesuada.Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.Lorem donec
						massa sapien faucibus et molestie ac feugiat sed.Cras pulvinar mattis nunc sed blandit libero volutpat sed cras.Nec
						feugiat nisl pretium fusce id velit ut. Ut sem nulla pharetra diam sit amet nisl suscipit.Faucibus et molestie ac
						feugiat.Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.Mi proin sed libero enim sed.Nibh sit amet
						commodo nulla facilisi nullam.Donec et odio pellentesque diam volutpat commodo sed egestas egestas.Faucibus et
						molestie ac feugiat sed lectus vestibulum mattis.Imperdiet dui accumsan sit amet.Urna duis convallis convallis
						tellus id interdum velit laoreet id.Adipiscing bibendum est ultricies integer quis.At augue eget arcu dictum varius
						duis at consectetur lorem.Risus nec feugiat in fermentum posuere urna.Elit ut aliquam purus sit amet luctus
						venenatis lectus magna.Vulputate enim nulla aliquet porttitor.Cras fermentum odio eu feugiat pretium nibh ipsum.Nisl
						purus in mollis nunc sed.
					</Modal>
				)}
			</div>
		</>
	);
};

export const ModalPage: () => JSX.Element = withOptions(ModalPageBase, undefined, 'ModalPageBase');
