import React, { ReactNode } from 'react';

export interface IStepProps {
	label: ReactNode;
	value: string;
	onClick?: (event: any, value: string) => void;
}

export const Step = (props: IStepProps) => {

	const { label, value, onClick } = props;

	return (
		<div onClick={(event) => onClick && onClick(event, value)}>
			{label}
		</div>
	);
}
