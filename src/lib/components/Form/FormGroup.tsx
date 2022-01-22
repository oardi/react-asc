import React, { ReactNode } from 'react';

interface IFormGroupProps {
	children?: ReactNode;
	className?: string;
}

export const FormGroup = (props: IFormGroupProps) => {

	const { children, className = 'mb-1' } = props;

	return (
		<div className={className}>
			{children}
		</div>
	);
};
