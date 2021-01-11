import React from 'react';
import { ITabProps } from './Tab';
export interface ITabsetProps {
    children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
}
export declare const Tabset: ({ children }: ITabsetProps) => JSX.Element;
