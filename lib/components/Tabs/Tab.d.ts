import { ReactNode } from 'react';
export interface ITabProps {
    label: ReactNode;
    value: string;
    isActive?: boolean;
    fixed?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: (event: any, value: string) => void;
}
export declare const Tab: (props: ITabProps) => JSX.Element;
