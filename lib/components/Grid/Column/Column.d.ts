import { ReactNode } from 'react';
interface IColProps {
    children?: ReactNode;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
export declare const Column: (props: IColProps) => JSX.Element;
export {};
