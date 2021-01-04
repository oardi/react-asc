import React, { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { COLOR, VARIANT } from '../component.enums';
import { Form, IControls, IFormValues } from '../Form';
import { Modal } from './Modal';
import { MODALTYPE } from './modal.enum';

interface IModalProps {
	title?: string;
	description?: string | ReactElement;
	formControls?: IControls;
	modalType?: MODALTYPE;
	onOk?: (values?: IFormValues) => void;
	onCancel?: () => void;
	showOkButton?: boolean;
	showCancelButton?: boolean;
	isDismissable?: boolean;
}

export const GlobalModal = ({
	title,
	description,
	formControls,
	onOk,
	onCancel,
	showOkButton = true,
	showCancelButton = true,
	isDismissable = false
}: IModalProps) => {

	// workaround for componentWillReceiveUpdates
	const [myControls, setMyControls] = useState<IControls>({});
	useEffect(() => {
		setMyControls({ ...formControls });
	}, []);
	// end

	const modalType = formControls ? MODALTYPE.FORM : MODALTYPE.BASIC;
	const myForm = useRef<Form>();

	const handleOk = () => {
		if (modalType === MODALTYPE.FORM) {
			myForm.current.handleFormSubmit();
		} else {
			onOk();
		}
	}

	const handleCancel = () => {
		onCancel();
	}

	const onSubmit = (values: IFormValues) => {
		onOk(values);
	}

	return (
		<Modal
			header={title}
			onHeaderCloseClick={onCancel}
			isDismissable={isDismissable}
			footer={
				<Fragment>
					{showCancelButton && <Button color={COLOR.secondary} variant={VARIANT.text} onClick={handleCancel}>cancel</Button>}
					{showOkButton && <Button onClick={handleOk}>ok</Button>}
				</Fragment>
			}>

			{description &&
				<div>
					{description}
				</div>
			}

			{
				modalType === MODALTYPE.FORM &&
				<Fragment>
					<Form
						ref={myForm}
						controls={myControls}
						validateOnBlur
						onSubmit={onSubmit}
					/>
				</Fragment>
			}
		</Modal>
	);
}
