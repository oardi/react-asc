import { ReactElement, ReactNode } from 'react';
interface IModalProps {
    children?: ReactNode;
    header?: string;
    footer?: string | ReactElement;
    onHeaderCloseClick?: Function;
    onBackdropClick?: Function;
    isDismissable?: boolean;
}
export declare const Modal: (props: IModalProps) => JSX.Element;
export {};
