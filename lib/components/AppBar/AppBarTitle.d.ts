import { ReactNode } from 'react';
export interface IAppBarTitleProps {
    children?: ReactNode;
    onClick?: () => void;
}
export declare const AppBarTitle: ({ children, onClick }: IAppBarTitleProps) => JSX.Element;
