import { ReactElement } from 'react';
import { IListItemProps } from './ListItem';
export interface IListProps {
    children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
    isFlush?: boolean;
    isHoverable?: boolean;
}
export declare const List: (props: IListProps) => JSX.Element;
