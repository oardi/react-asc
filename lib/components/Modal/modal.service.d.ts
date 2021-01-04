import { IControls, IFormValues } from '../Form';
import { ReactElement } from 'react';
export interface IModalOptions {
    formControls?: IControls;
    showOkButton?: boolean;
    showCancelButton?: boolean;
    isDismissable?: boolean;
}
export declare class ModalService {
    private container;
    show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
    private hide;
}
