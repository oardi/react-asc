import { ReactNode } from 'react';
interface IModalHeaderProps {
    children?: ReactNode;
    onClose?: Function;
    isDismissable?: boolean;
}
export declare const ModalHeader: ({ children, isDismissable, onClose }: IModalHeaderProps) => JSX.Element;
export {};
