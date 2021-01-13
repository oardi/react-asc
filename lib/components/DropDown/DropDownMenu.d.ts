import { ReactElement, ReactNode } from 'react';
import { IDropDownItemProps } from './DropDownItem';
export interface IDropDownMenuProps {
    children?: ReactNode;
    className?: string;
    items?: Array<ReactElement<IDropDownItemProps>>;
    menuPosition?: MenuPosition;
}
declare type MenuPosition = 'right' | 'left';
export declare const DropDownMenu: ({ items, children, className, menuPosition }: IDropDownMenuProps) => JSX.Element;
export {};
