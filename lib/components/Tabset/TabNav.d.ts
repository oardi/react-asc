import { ReactNode } from 'react';
export interface ITabNavProps {
    eventKey: string;
    disabled?: boolean;
    children?: ReactNode;
    isActive?: boolean;
    onClick?: (eventKey: string) => void;
}
export declare const TabNav: ({ eventKey, disabled, children, isActive, onClick }: ITabNavProps) => JSX.Element;
