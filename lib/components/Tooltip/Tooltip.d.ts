import { ReactElement } from 'react';
export interface ITooltipProps {
    placement?: 'top' | 'bottom' | 'right' | 'left';
    text?: string;
    children: ReactElement;
}
export declare const Tooltip: (props: ITooltipProps) => JSX.Element;
