import React, { MouseEvent } from 'react';
import { COLOR, VARIANT } from '../component.enums';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    block?: boolean;
    color?: COLOR;
    isActive?: boolean;
    isRounded?: boolean;
    onClick?: (e: MouseEvent) => void;
    variant?: VARIANT;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
