import { ReactNode } from 'react';
interface IListItemTextProps {
    primary: ReactNode;
    secondary?: ReactNode;
}
export declare const ListItemText: ({ primary, secondary }: IListItemTextProps) => JSX.Element;
export {};
