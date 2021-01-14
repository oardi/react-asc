import { MouseEvent, ReactNode } from 'react';
export interface IListItemProps {
    children?: ReactNode;
    active?: boolean;
    className?: string;
    isHoverable?: boolean;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent) => void;
}
export declare const ListItem: ({ children, active, className, isHoverable, isDisabled, onClick }: IListItemProps) => JSX.Element;
