/// <reference types="react" />
export interface IMilliSecondProps {
    className?: string;
    value?: number;
    steps?: number;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const MilliSecondSelect: (props: IMilliSecondProps) => JSX.Element;
