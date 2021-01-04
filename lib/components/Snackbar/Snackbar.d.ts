/// <reference types="react" />
import { COLOR } from '../component.enums';
export interface ISnackbarProps {
    message: string;
    color?: COLOR;
    actionText?: string;
    onOk?: () => void;
}
export declare const Snackbar: ({ message, color, actionText, onOk }: ISnackbarProps) => JSX.Element;
