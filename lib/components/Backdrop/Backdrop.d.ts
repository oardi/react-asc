import React from 'react';
interface IBackdropProps {
    target?: HTMLElement;
    onClick?: () => void;
    isTransparent?: boolean;
}
export declare const Backdrop: ({ target, isTransparent, onClick }: IBackdropProps) => React.ReactPortal;
export {};
