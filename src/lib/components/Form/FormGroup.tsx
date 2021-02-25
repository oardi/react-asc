import React, { ReactNode } from 'react';

interface IFormGroupProps {
	children?: ReactNode;
	className?: string;
}

export const FormGroup = (props: IFormGroupProps) => {

	const { children, className = 'form-group' } = props;

	return (
		<div className={className}>
			{children}
		</div>
	);
};
