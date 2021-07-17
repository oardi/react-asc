/// <reference types="react" />
export interface IYearProps {
    from?: number;
    to?: number;
    value?: number;
    className?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const YearSelect: (props: IYearProps) => JSX.Element;
