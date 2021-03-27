import { ReactNode } from 'react';
export interface IAppBarTitleProps {
    children?: ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const AppBarTitle: (props: IAppBarTitleProps) => JSX.Element;
