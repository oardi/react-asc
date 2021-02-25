import React, { ReactNode } from 'react';
export interface IDrawerProps {
    children?: ReactNode;
    position?: 'left' | 'right';
    onClickBackdrop?: () => void;
}
export declare const Drawer: (props: IDrawerProps) => React.ReactPortal;
