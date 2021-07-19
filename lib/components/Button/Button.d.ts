import React from 'react';
import { COLOR, VARIANT } from '../component.enums';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    block?: boolean;
    color?: COLOR;
    isActive?: boolean;
    isRounded?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    variant?: VARIANT;
    startIcon?: React.SVGProps<SVGSVGElement>;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
