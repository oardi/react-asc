import { ReactElement } from 'react';
export interface ITooltipProps {
    placement?: 'top' | 'bottom' | 'right' | 'left';
    text?: string;
    children?: ReactElement;
}
export declare const Tooltip: ({ children, text, placement }: ITooltipProps) => JSX.Element;
