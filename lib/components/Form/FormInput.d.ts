/// <reference types="react" />
import { IFormInputOptions, IFormTextAreaOptions } from './form.interfaces';
import { IFormControlType } from './form.types';
export interface IFormInputProps {
    value: any;
    name: string;
    type: IFormControlType;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    readonly?: boolean;
    isValid?: boolean;
    autoFocus?: boolean;
    options?: Array<IFormInputOptions>;
    textareaOptions?: IFormTextAreaOptions;
    label?: string;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onKeyDown?: (event: any) => void;
}
export declare const FormInput: ({ value, name, type, placeholder, className, isValid, options, textareaOptions, autoFocus, label, disabled, readonly, onChange, onBlur, onKeyDown }: IFormInputProps) => JSX.Element;
