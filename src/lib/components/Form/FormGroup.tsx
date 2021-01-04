import React, { ReactNode } from 'react';

interface IFormGroupProps {
	children?: ReactNode;
	className?: string;
}

export const FormGroup = ({ children, className = 'form-group' }: IFormGroupProps) => {
	return (
		<div className={className}>
			{children}
		</div>
	);
};
