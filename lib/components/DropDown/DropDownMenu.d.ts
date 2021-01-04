import { ReactElement, ReactNode } from 'react';
interface IDropDownMenuProps {
    children?: ReactNode;
    className?: string;
    items?: Array<ReactElement>;
    menuPosition?: MenuPosition;
}
declare type MenuPosition = 'right' | 'left';
export declare const DropDownMenu: ({ items, children, className, menuPosition }: IDropDownMenuProps) => JSX.Element;
export {};
