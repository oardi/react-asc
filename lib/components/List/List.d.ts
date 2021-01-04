import { ReactNode } from 'react';
interface IListProps {
    children?: ReactNode;
    isFlush?: boolean;
}
export declare const List: ({ children, isFlush }: IListProps) => JSX.Element;
export {};
