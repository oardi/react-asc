import React, { ReactNode } from 'react';
export interface IExpansionPanelProps {
    header: ReactNode;
    children: ReactNode;
    isExpanded?: boolean;
    onChange?: (event: React.MouseEvent, isExpanded: boolean) => void;
}
export declare const ExpansionPanel: ({ header, children, isExpanded, onChange }: IExpansionPanelProps) => JSX.Element;
