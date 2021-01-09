import React from 'react';
interface IBackdropProps {
    onClick?: () => void;
    isTransparent?: boolean;
}
export declare const Backdrop: ({ isTransparent, onClick }: IBackdropProps) => React.ReactPortal;
export {};
