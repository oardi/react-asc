import { ReactElement } from 'react';
import { IListItemProps } from './ListItem';
interface IListProps {
    children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
    isFlush?: boolean;
    isHoverable?: boolean;
}
export declare const List: ({ children, isFlush, isHoverable }: IListProps) => JSX.Element;
export {};
