/// <reference types="react" />
export declare enum TIMEMODE {
    HOUR = 0,
    MINUTE = 1,
    SECONDS = 2,
    MILLISECONDS = 3
}
export interface ITimeSelectProps {
    value?: Date;
    className?: string;
    id?: string;
    name?: string;
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    showMilliSeconds?: boolean;
    disabled?: boolean;
    onChange?: (val: Date) => void;
}
export declare const TimeSelect: (props: ITimeSelectProps) => JSX.Element;
