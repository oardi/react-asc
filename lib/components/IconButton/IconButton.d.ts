import { MouseEvent } from 'react';
import { COLOR, VARIANT } from '../component.enums';
export interface IIconButtonProps {
    icon?: string;
    color?: COLOR;
    disabled?: boolean;
    isActive?: boolean;
    onClick?: (e: MouseEvent) => void;
    variant?: VARIANT;
    className?: string;
}
export declare const IconButton: ({ icon, color, disabled, isActive, onClick, variant, className }: IIconButtonProps) => JSX.Element;
