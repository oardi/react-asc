import React, { ReactNode } from 'react';
export interface IDropDownItemProps {
    key?: string;
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    type?: 'item' | 'header';
}
export declare const DropDownItem: ({ children, onClick, type }: IDropDownItemProps) => JSX.Element;
