import { ReactNode } from 'react';
interface IListItemActionProps {
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
}
export declare const ListItemAction: ({ children, onClick }: IListItemActionProps) => JSX.Element;
export {};
