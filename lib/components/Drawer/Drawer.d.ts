import React, { ReactNode } from 'react';
export interface IDrawerProps {
    children?: ReactNode;
    position?: 'left' | 'right';
    className?: string;
    onClickBackdrop?: () => void;
    permanent?: boolean;
    target?: HTMLElement;
}
export declare const Drawer: (props: IDrawerProps) => React.ReactPortal;
