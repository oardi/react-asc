import { ReactNode } from 'react';
export interface IExpansionPanelProps {
    header: ReactNode;
    children: ReactNode;
    isExpanded?: boolean;
}
export declare const ExpansionPanel: ({ header, children, isExpanded }: IExpansionPanelProps) => JSX.Element;
