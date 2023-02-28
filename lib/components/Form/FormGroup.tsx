import React from 'react';

interface IFormGroupProps {
	children?: React.ReactNode;
	className?: string;
}

export const FormGroup = (props: IFormGroupProps): JSX.Element => {
	const { children, className } = props;
	return <div className={className}>{children}</div>;
};
