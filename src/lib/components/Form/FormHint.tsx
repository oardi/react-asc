import React from 'react';

interface IFormHintProps {
	hint: string;
	className?: string;
}

export const FormHint = ({ hint, className = 'form-text text-muted' }: IFormHintProps) => (
	<small className={className}>
		{hint}
	</small>
);
