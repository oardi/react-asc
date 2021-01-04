import { ReactNode } from 'react';
import { COLOR } from '../component.enums';
export interface IAppBarProps {
    children?: ReactNode;
    color?: COLOR;
}
export declare const AppBar: ({ children, color, }: IAppBarProps) => JSX.Element;
