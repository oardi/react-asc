import { ReactNode } from 'react';
interface ICardProps {
    children?: ReactNode;
    className?: string;
    shadow?: boolean;
}
export declare const Card: (props: ICardProps) => JSX.Element;
export {};
