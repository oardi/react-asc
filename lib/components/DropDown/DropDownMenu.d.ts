import { ReactElement } from 'react';
import { IDropDownItemProps } from './DropDownItem';
export interface IDropDownMenuProps {
    children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
    className?: string;
    menuPosition?: MenuPosition;
}
declare type MenuPosition = 'right' | 'left';
export declare const DropDownMenu: ({ children, className, menuPosition }: IDropDownMenuProps) => JSX.Element;
export {};
