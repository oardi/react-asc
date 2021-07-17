/// <reference types="react" />
export interface IHourProps {
    value?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const HourSelect: (props: IHourProps) => JSX.Element;
