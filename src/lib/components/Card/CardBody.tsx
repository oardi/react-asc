import React, { ReactNode } from 'react';

interface ICardBodyProps {
	children?: ReactNode;
}

export const CardBody = ({ children }: ICardBodyProps) => (
	<div className="card-body">
		{children}
	</div>
);
