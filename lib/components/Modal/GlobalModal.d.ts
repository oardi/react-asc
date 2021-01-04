import { ReactElement } from 'react';
import { IControls, IFormValues } from '../Form';
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
export declare const GlobalModal: ({ title, description, formControls, onOk, onCancel, showOkButton, showCancelButton, isDismissable }: IModalProps) => JSX.Element;
export {};
