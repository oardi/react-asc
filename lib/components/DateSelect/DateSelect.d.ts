/// <reference types="react" />
export declare enum DATEMODE {
    year = 0,
    month = 1,
    day = 2
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
