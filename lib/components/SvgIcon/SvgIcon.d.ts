import React from 'react';
export interface ISvgIconProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}
export declare const SvgIcon: (props: ISvgIconProp) => JSX.Element;
