import { ReactNode } from 'react';
import { COLOR, SIZE } from '../component.enums';
export interface IAppBarProps {
    children?: ReactNode;
    className?: string;
    color?: COLOR.primary | COLOR.light;
    shadow?: boolean | SIZE.sm | SIZE.md | SIZE.lg;
}
export declare const AppBar: (props: IAppBarProps) => JSX.Element;
