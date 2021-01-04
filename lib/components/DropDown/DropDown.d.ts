import { ReactElement } from 'react';
interface IDropDownProps {
    toggle?: ReactElement;
    menu?: ReactElement;
    onToggleClick?: (e: Event) => void;
}
export declare const DropDown: ({ toggle, menu, onToggleClick }: IDropDownProps) => JSX.Element;
export {};
