import React, { ReactNode } from 'react';
export interface IDropDownItemProps {
    children?: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const DropDownItem: ({ children, onClick }: IDropDownItemProps) => JSX.Element;
