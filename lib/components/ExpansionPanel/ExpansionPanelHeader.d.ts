import { ReactNode } from 'react';
export interface IExpansionPanelHeaderProps {
    onClick?: () => void;
    children?: ReactNode;
    isExpanded: boolean;
}
export declare const ExpansionPanelHeader: ({ children, isExpanded, onClick }: IExpansionPanelHeaderProps) => JSX.Element;
