import React from 'react';
export interface ISpeedDialActionProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: React.SVGProps<SVGSVGElement>;
    tooltipTitle?: string;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const SpeedDialAction: (props: ISpeedDialActionProps) => JSX.Element;
