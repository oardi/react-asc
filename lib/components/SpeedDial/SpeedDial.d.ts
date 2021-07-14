import React from 'react';
export interface ISpeedDialProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClose?: (e: React.MouseEvent) => void;
    onOpen?: (e: React.MouseEvent) => void;
    open?: boolean;
}
export declare const SpeedDial: (props: ISpeedDialProps) => JSX.Element;
