import { ReactElement, ReactNode } from 'react';
interface IModalProps {
    className?: string;
    children?: ReactNode;
    header?: string;
    footer?: string | ReactElement;
    onHeaderCloseClick?: Function;
    onBackdropClick?: Function;
    isDismissable?: boolean;
    fullScreen?: boolean;
}
export declare const Modal: (props: IModalProps) => JSX.Element;
export {};
