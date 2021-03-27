import { ReactNode } from "react";
import { COLOR } from '../component.enums';
export interface IChipProps {
    color?: COLOR;
    children?: ReactNode;
    className?: string;
    shadow?: boolean;
    onClick?: (e: MouseEvent) => void;
}
export declare const Chip: (props: IChipProps) => JSX.Element;
