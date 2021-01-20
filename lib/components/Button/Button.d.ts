import { ReactNode, MouseEvent } from 'react';
import { COLOR, VARIANT } from '../component.enums';
export interface IButtonProps {
    block?: boolean;
    children?: ReactNode;
    className?: string;
    color?: COLOR;
    disabled?: boolean;
    isActive?: boolean;
    isRounded?: boolean;
    onClick?: (e: MouseEvent) => void;
    variant?: VARIANT;
    autofocus?: boolean;
    onMouseOver?: (e: MouseEvent) => void;
    onMouseLeave?: (e: MouseEvent) => void;
}
export declare const Button: ({ children, block, color, disabled, isActive, isRounded, onClick, variant, className, autofocus: autoFocus, onMouseOver, onMouseLeave }: IButtonProps) => JSX.Element;
