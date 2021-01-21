import { ReactElement } from 'react';
import { ITabProps } from './Tab';
export interface ITabsetProps {
    children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
    className?: string;
    fill?: boolean;
    onTabSelect?: (eventKey: string) => void;
    selectedEventKey?: string;
}
export declare const Tabset: ({ children, className, fill, onTabSelect, selectedEventKey }: ITabsetProps) => JSX.Element;
