/// <reference types="react" />
export interface IDayProps {
    day?: number;
    month?: number;
    year?: number;
    className?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const DaySelect: (props: IDayProps) => JSX.Element;
