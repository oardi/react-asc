import React, { ReactElement } from 'react';
export interface ISpeedDialIconProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    openIcon?: ReactElement;
}
export declare const SpeedDialIcon: (props: ISpeedDialIconProps) => JSX.Element;
