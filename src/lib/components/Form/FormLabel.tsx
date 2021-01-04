import React, { ReactNode } from 'react';

export interface IFormLabelProps {
	children?: ReactNode;
	className?: string;
	htmlFor?: string;
}

export const FormLabel = ({ children, className, htmlFor }: IFormLabelProps) => (
	<label htmlFor={htmlFor} className={className}>
		{children}
	</label>
);
