import React from 'react';
import { HtmlBaseProps } from '../component.interfaces';
export interface ICheckboxProps extends HtmlBaseProps {
    checked?: boolean;
    label?: string;
    value?: string;
    onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: any) => void;
}
export declare const Checkbox: (props: ICheckboxProps) => JSX.Element;
