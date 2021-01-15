import { ReactNode } from 'react';
import { COLOR } from '../component.enums';
export interface IAppBarProps {
    children?: ReactNode;
    color?: COLOR;
    shadow?: boolean | 'sm' | 'md' | 'lg';
}
export declare const AppBar: ({ children, color, shadow }: IAppBarProps) => JSX.Element;
