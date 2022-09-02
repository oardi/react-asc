import type { ReactElement} from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { SIZE, COLOR, VARIANT } from '../component.enums';
import type { IControls, IFormValues } from '../Form';
import { Form } from '../Form';
import { Modal } from './Modal';
import { MODALBUTTONTYPE, MODALTYPE } from './modal.enum';
import type { IModalButton } from './modal.interfaces';

interface IModalProps {
	title?: string;
	description?: string | ReactElement;
	formControls?: IControls;
	modalType?: MODALTYPE;
	onOk: (values?: IFormValues) => void;
	onChange?: (values?: IFormValues) => void;
	onCancel?: () => void;
	onBackdropClick?: () => void;
	isDismissable?: boolean;
	buttons?: IModalButton[];
	fullScreen?: boolean;
	size?: SIZE;
}

export const GlobalModal = ({
	title,
	description,
	formControls,
	onOk,
	onChange,
	onCancel,
	onBackdropClick,
	isDismissable = false,
	buttons = [
		{ label: 'Cancel', type: MODALBUTTONTYPE.CANCEL, color: COLOR.secondary, variant: VARIANT.text, shadow: false },
		{ label: 'Ok', type: MODALBUTTONTYPE.OK, variant: VARIANT.contained, focus: true },
	],
	size = SIZE.md,
	fullScreen = false
}: IModalProps): JSX.Element => {

	// workaround for getDerivedStateFromProps
	const [myControls, setMyControls] = useState<IControls | null>(null);
	useEffect(() => {
		setMyControls({ ...formControls });
	}, []);
	// end

	const modalType: MODALTYPE = formControls ? MODALTYPE.FORM : MODALTYPE.BASIC;
	const myForm: React.RefObject<Form> = useRef<Form>(null);

	const handleOk = (): void => {
		if (modalType === MODALTYPE.FORM) {
			myForm?.current?.handleFormSubmit();
		} else {
			onOk && onOk();
		}
	};

	const handleCancel = (): void => {
		onCancel && onCancel();
	};

	const onSubmit = (values: IFormValues): void => {
		onOk && onOk(values);
	};

	const handleClickButton = (button: IModalButton): void => {
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
	};

	return (
		<Modal
			size={size}
			fullScreen={fullScreen}
			header={title}
			onHeaderCloseClick={onCancel}
			onBackdropClick={onBackdropClick}
			isDismissable={isDismissable}
			footer={
				<>
					{buttons.map((button, index) => (
						<Button
							key={index}
							variant={button.variant}
							color={button.color}
							autoFocus={button.autoFocus}
							shadow={button.shadow}
							onClick={(): void => handleClickButton(button)}>
							{button.label}
						</Button>
					))}
				</>
			}>

			{description && <div>{description}</div>}

			{
				modalType === MODALTYPE.FORM &&
				<>
					<Form
						ref={myForm}
						controls={(myControls as IControls)}
						validateOnBlur
						onSubmit={onSubmit}
						onChange={onChange}
					/>
				</>
			}
		</Modal>
	);
};
