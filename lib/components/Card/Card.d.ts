import { ReactNode } from 'react';
interface ICardProps {
    children?: ReactNode;
    className?: string;
    shadow?: boolean;
    style?: any;
}
export declare const Card: (props: ICardProps) => JSX.Element;
export {};
