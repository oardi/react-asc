import React from 'react';
export interface ITabPanelProps extends React.DetailedHTMLProps<React.HTMLProps<HTMLDivElement>, HTMLDivElement> {
    value: string;
    index: string;
    className?: string;
}
export declare const TabPanel: (props: ITabPanelProps) => JSX.Element;
