/// <reference types="react" />
export interface ISelectOption {
    value: string;
    label?: string;
}
export interface ISelectProps {
    id?: string;
    name?: string;
    className?: string;
    options: Array<ISelectOption>;
    value?: string | Array<string>;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (val: string | Array<string>) => void;
    onKeyDown?: (event: any) => void;
}
export declare const Select: (props: ISelectProps) => JSX.Element;
