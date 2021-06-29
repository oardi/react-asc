import React from 'react';
export interface IIconProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Icon: (props: IIconProp) => JSX.Element;
