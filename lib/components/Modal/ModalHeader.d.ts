import { ReactNode } from 'react';
interface IModalHeaderProps {
    children?: ReactNode;
    onClose?: Function;
    isDismissable?: boolean;
}
export declare const ModalHeader: (props: IModalHeaderProps) => JSX.Element;
export {};
