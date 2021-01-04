import React, { ReactNode } from 'react';

interface ICardTextProps {
	children?: ReactNode;
}

export const CardText = ({children}: ICardTextProps) => (
	<p className="card-text">
		{children}
	</p>
);
