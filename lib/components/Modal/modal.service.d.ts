import { IControls, IFormValues } from '../Form';
import { ReactElement } from 'react';
export interface IModalService {
    show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
}
export interface IModalOptions {
    formControls?: IControls;
    showOkButton?: boolean;
    showCancelButton?: boolean;
    isDismissable?: boolean;
}
declare class ModalService implements IModalService {
    private container;
    show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
    private hide;
}
export declare const modalService: ModalService;
export {};
