import React, { ReactNode } from 'react';

interface ICardTextProps {
	children?: ReactNode;
}

export const CardText = ({children}: ICardTextProps) => (
	<div className="card-text">
		{children}
	</div>
);
