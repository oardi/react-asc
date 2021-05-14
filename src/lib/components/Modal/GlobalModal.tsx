import React, { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { COLOR, VARIANT } from '../component.enums';
import { Form, IControls, IFormValues } from '../Form';
import { Modal } from './Modal';
import { MODALBUTTONTYPE, MODALTYPE } from './modal.enum';
import { IModalButton } from './modal.interfaces';

interface IModalProps {
	title?: string;
	description?: string | ReactElement;
	formControls?: IControls;
	modalType?: MODALTYPE;
	onOk?: (values?: IFormValues) => void;
	onCancel?: () => void;
	isDismissable?: boolean;
	buttons?: Array<IModalButton>;
	fullScreen?: boolean;
}

export const GlobalModal = ({
	title,
	description,
	formControls,
	onOk,
	onCancel,
	isDismissable = false,
	buttons = [
		{ label: 'Cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text, focus: true },
		{ label: 'Ok', type: MODALBUTTONTYPE.OK, variant: VARIANT.contained },
	],
	fullScreen = false
}: IModalProps) => {

	// workaround for getDerivedStateFromProps
	const [myControls, setMyControls] = useState<IControls | null>(null);
	useEffect(() => {
		setMyControls({ ...formControls });
	}, []);
	// end

	const modalType = formControls ? MODALTYPE.FORM : MODALTYPE.BASIC;
	const myForm = useRef<Form>(null);

	const handleOk = () => {
		if (modalType === MODALTYPE.FORM) {
			myForm?.current?.handleFormSubmit();
		} else {
			onOk && onOk();
		}
	}

	const handleCancel = () => {
		onCancel && onCancel();
	}

	const onSubmit = (values: IFormValues) => {
		onOk && onOk(values);
	}

	const handleClickButton = (button: IModalButton) => {
		switch (button.type) {
			case MODALBUTTONTYPE.OK:
				handleOk();
				break;
			case MODALBUTTONTYPE.CANCEL:
				handleCancel();
				break;
			default:
				handleCancel();
				break;
		}

		button.handler && button.handler();
	}

	return (
		<Modal
			fullScreen={fullScreen}
			header={title}
			onHeaderCloseClick={onCancel}
			isDismissable={isDismissable}
			footer={
				<Fragment>
					{buttons.map((button, index) => (
						<Button
							key={index}
							variant={button.variant}
							color={button.color}
							autoFocus={button.autoFocus}
							onClick={() => handleClickButton(button)}>
							{button.label}
						</Button>
					))}
				</Fragment>
			}>

			{description && <div>{description}</div>}

			{
				modalType === MODALTYPE.FORM &&
				<Fragment>
					<Form
						ref={myForm}
						controls={(myControls as IControls)}
						validateOnBlur
						onSubmit={onSubmit}
					/>
				</Fragment>
			}
		</Modal>
	);
}
