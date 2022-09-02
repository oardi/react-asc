import type { ReactNode } from 'react';
import React from 'react';

interface IFormGroupProps {
	children?: ReactNode;
	className?: string;
}

export const FormGroup = (props: IFormGroupProps): JSX.Element => {

	const { children, className = 'mb-1' } = props;

	return (
		<div className={className}>
			{children}
		</div>
	);
};
