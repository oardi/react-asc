import React, { ReactNode } from "react";
import { COLOR } from '../component.enums';
export interface IChipProps {
    color?: COLOR;
    children?: ReactNode;
    className?: string;
    shadow?: boolean;
    onClick?: (e: React.MouseEvent<Element>) => void;
    onDelete?: (e: React.MouseEvent<Element>) => void;
    deleteIcon?: any;
    style?: any;
}
export declare const Chip: (props: IChipProps) => JSX.Element;
