import { ReactNode } from 'react';
export interface ITabProps {
    title: ReactNode;
    eventKey: string;
    isActive?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
}
export declare const Tab: (props: ITabProps) => JSX.Element;
