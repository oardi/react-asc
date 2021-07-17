/// <reference types="react" />
export interface INumberSelectProps {
    value?: number;
    from?: number;
    to?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const NumberSelect: (props: INumberSelectProps) => JSX.Element;
