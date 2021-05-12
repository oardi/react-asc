import React from 'react';
import { COLOR } from '../component.enums';
export interface IFloatingActionButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.SVGProps<SVGSVGElement>;
    color?: COLOR;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: (e: any) => void;
}
export declare const FloatingActionButton: (props: IFloatingActionButtonProps) => JSX.Element;
