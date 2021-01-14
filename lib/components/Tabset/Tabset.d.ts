import React from 'react';
import { ITabProps } from './Tab';
export interface ITabsetProps {
    children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
    className?: string;
    onTabSelect?: (eventKey: string) => void;
    selectedEventKey?: string;
}
export declare const Tabset: ({ children, className, onTabSelect, selectedEventKey }: ITabsetProps) => JSX.Element;
