import { IControls, IFormValues } from '../Form';
import { ReactElement } from 'react';
import { IModalButton } from './modal.interfaces';
export interface IModalService {
    show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
}
export interface IModalOptions {
    formControls?: IControls;
    isDismissable?: boolean;
    buttons?: Array<IModalButton>;
}
declare class ModalService implements IModalService {
    private container;
    show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
    private hide;
}
export declare const modalService: ModalService;
export {};
