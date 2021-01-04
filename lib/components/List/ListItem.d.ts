import { MouseEvent, ReactNode } from 'react';
interface IListItemProps {
    children?: ReactNode;
    active?: boolean;
    isHoverable?: boolean;
    isDisabled?: boolean;
    onClick?: (e: MouseEvent) => void;
}
export declare const ListItem: ({ children, active, isHoverable, isDisabled, onClick }: IListItemProps) => JSX.Element;
export {};
