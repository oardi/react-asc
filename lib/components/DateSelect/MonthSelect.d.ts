/// <reference types="react" />
export interface IMonthProps {
    value?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const MonthSelect: (props: IMonthProps) => JSX.Element;
