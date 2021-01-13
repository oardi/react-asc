import { ReactElement } from 'react';
import { IDropDownMenuProps } from './DropDownMenu';
interface IDropDownProps {
    toggle?: ReactElement;
    menu?: ReactElement<IDropDownMenuProps>;
    onToggleClick?: (e: Event) => void;
}
export declare const DropDown: ({ toggle, menu, onToggleClick }: IDropDownProps) => JSX.Element;
export {};
