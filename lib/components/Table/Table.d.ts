import { ReactElement } from 'react';
export interface ITableProps {
    children?: ReactElement | Array<ReactElement>;
    className?: string;
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    responsive?: boolean;
}
export declare const Table: ({ children, className, bordered, striped, hover, responsive }: ITableProps) => JSX.Element;
