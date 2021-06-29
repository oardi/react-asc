import { ReactElement } from 'react';
import { MenuPosition } from './dropDown.types';
import { IDropDownItemProps } from './DropDownItem';
interface IDropDownProps {
    toggle?: ReactElement;
    children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
    menuPosition?: MenuPosition;
    onToggleClick?: (e: Event) => void;
}
export declare const DropDown: (props: IDropDownProps) => JSX.Element;
export {};
