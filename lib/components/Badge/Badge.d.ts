import React from 'react';
import { COLOR } from "../component.enums";
export interface IBadgeProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: COLOR;
    content?: any;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const Badge: (props: IBadgeProps) => JSX.Element;
