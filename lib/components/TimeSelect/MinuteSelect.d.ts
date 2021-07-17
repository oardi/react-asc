/// <reference types="react" />
export interface IMinuteProps {
    value?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    onChange?: (val: number) => void;
}
export declare const MinuteSelect: (props: IMinuteProps) => JSX.Element;
