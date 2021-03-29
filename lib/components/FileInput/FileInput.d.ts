import React from 'react';
export interface IFileInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name?: string;
    value?: string;
}
export declare const FileInput: (props: IFileInputProps) => JSX.Element;
