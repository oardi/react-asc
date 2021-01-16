import { ReactElement } from 'react';
import { IDropDownItemProps } from './DropDownItem';
interface IDropDownProps {
    toggle?: ReactElement;
    children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
    onToggleClick?: (e: Event) => void;
}
export declare const DropDown: ({ toggle, children, onToggleClick }: IDropDownProps) => JSX.Element;
export {};
