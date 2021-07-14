import React from 'react';
import { COLOR, SIZE, VARIANT } from '../component.enums';
export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.SVGProps<SVGSVGElement>;
    color?: COLOR;
    size?: SIZE;
    isActive?: boolean;
    disabled?: boolean;
    variant?: VARIANT;
    shadow?: boolean;
}
export declare const IconButton: (props: IIconButtonProps) => JSX.Element;
