import React, { ReactNode } from 'react';
export interface IListItemProps {
    id?: string;
    children?: ReactNode;
    active?: boolean;
    className?: string;
    isHoverable?: boolean;
    isDisabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const ListItem: (props: IListItemProps) => JSX.Element;
