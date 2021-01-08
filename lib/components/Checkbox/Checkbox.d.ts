import React from 'react';
import { HtmlBaseProps } from '../component.interfaces';
export interface ICheckboxProps extends HtmlBaseProps {
    id?: string;
    name?: string;
    className?: string;
    checked?: boolean;
    label?: string;
    value?: string;
    onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: any) => void;
}
export declare const Checkbox: ({ id, checked, className, label, name, value, onChange, onKeyDown }: ICheckboxProps) => JSX.Element;
