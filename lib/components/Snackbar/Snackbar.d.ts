import { COLOR } from '../component.enums';
export interface ISnackbarProps {
    message: string;
    color?: COLOR;
    actionText?: string;
    onOk?: () => void;
}
export declare const Snackbar: (props: ISnackbarProps) => JSX.Element;
