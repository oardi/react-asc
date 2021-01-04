import { ReactNode } from 'react';
export interface IFormLabelProps {
    children?: ReactNode;
    className?: string;
    htmlFor?: string;
}
export declare const FormLabel: ({ children, className, htmlFor }: IFormLabelProps) => JSX.Element;
