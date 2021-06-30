import React, { ReactNode } from 'react';
interface IListItemActionProps {
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const ListItemAction: ({ children, onClick }: IListItemActionProps) => JSX.Element;
export {};
