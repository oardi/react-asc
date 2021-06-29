import React from 'react';
interface IBackdropProps {
    target?: HTMLElement;
    onClick?: () => void;
    isTransparent?: boolean;
}
export declare const Backdrop: (props: IBackdropProps) => React.ReactPortal;
export {};
