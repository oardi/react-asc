import { COLOR } from '../component.enums';
export interface ISnackbarService {
    show(message: string, options?: ISnackbarOptions): Promise<void>;
}
export interface ISnackbarOptions {
    actionText?: string;
    timeout?: number;
    color?: COLOR;
}
declare class SnackbarService implements ISnackbarService {
    private container;
    private handler;
    show(message: string, options?: ISnackbarOptions): Promise<void>;
    private hide;
}
export declare const snackbarService: SnackbarService;
export {};
