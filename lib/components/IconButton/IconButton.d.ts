import React from 'react';
import { COLOR, VARIANT } from '../component.enums';
export interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: string;
    color?: COLOR;
    isActive?: boolean;
    variant?: VARIANT;
}
export declare const IconButton: (props: IIconButtonProps) => JSX.Element;
