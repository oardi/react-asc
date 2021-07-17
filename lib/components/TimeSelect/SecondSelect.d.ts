/// <reference types="react" />
export interface ISecondProps {
    value?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const SecondSelect: (props: ISecondProps) => JSX.Element;
