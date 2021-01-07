import React, { ReactNode } from 'react';
export interface IDropDownItemProps {
    key?: string;
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const DropDownItem: ({ children, onClick }: IDropDownItemProps) => JSX.Element;
