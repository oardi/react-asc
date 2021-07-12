import { ReactElement } from 'react';
export interface IWrapperProps {
    as?: string;
    children: ReactElement;
    className?: string;
}
export interface ITypographyProps {
    as?: string;
    children: any;
    className?: string;
    style?: any;
}
export declare const Typography: ({ children, as, ...rest }: ITypographyProps) => JSX.Element;
