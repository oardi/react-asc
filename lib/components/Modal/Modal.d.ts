import { ReactElement, ReactNode } from 'react';
interface IModalProps {
    children?: ReactNode;
    header?: string;
    footer?: string | ReactElement;
    onHeaderCloseClick?: Function;
    onBackdropClick?: Function;
    isDismissable?: boolean;
}
export declare const Modal: ({ children, header, footer, onHeaderCloseClick, onBackdropClick, isDismissable }: IModalProps) => JSX.Element;
export {};
