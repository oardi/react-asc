import { ReactElement } from 'react';
import { MenuPosition } from './dropDown.types';
import { IDropDownItemProps } from './DropDownItem';
export interface IDropDownMenuProps {
    children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
    className?: string;
    menuPosition?: MenuPosition;
}
export declare const DropDownMenu: ({ children, className, menuPosition }: IDropDownMenuProps) => JSX.Element;
