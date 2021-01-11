import React from 'react';
import { ITabProps } from './Tab';
export interface ITabsetProps {
    children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
    className?: string;
}
export declare const Tabset: ({ children, className }: ITabsetProps) => JSX.Element;
