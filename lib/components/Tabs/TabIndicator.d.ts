import React from 'react';
import { COLOR } from '../component.enums';
export interface ITabIndicatorProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    amount?: number;
    index?: number;
    color?: COLOR;
    width?: any;
    left?: any;
}
export declare const TabIndicator: (props: ITabIndicatorProps) => JSX.Element;
