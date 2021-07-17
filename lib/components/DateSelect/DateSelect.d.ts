/// <reference types="react" />
export declare enum DATEMODE {
    YEAR = 0,
    MONTH = 1,
    DAY = 2
}
export interface IDateSelectProps {
    value?: Date;
    className?: string;
    disabled?: boolean;
    yearConfig?: {
        from?: number;
        to?: number;
    };
    onChange?: (val: Date) => void;
}
export declare const DateSelect: (props: IDateSelectProps) => JSX.Element;
