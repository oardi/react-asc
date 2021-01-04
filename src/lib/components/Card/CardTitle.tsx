import React, { ReactNode } from 'react';

interface ICardTitleProps {
	children?: ReactNode;
}

export const CardTitle = ({ children }: ICardTitleProps) => (
	<h5 className="card-title">
		{children}
	</h5>
);
