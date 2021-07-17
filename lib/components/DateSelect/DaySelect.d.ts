/// <reference types="react" />
export interface IDaySelectProps {
    day?: number;
    month?: number;
    year?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const DaySelect: (props: IDaySelectProps) => JSX.Element;
