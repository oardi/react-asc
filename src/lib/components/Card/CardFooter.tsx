import React, { ReactNode } from 'react';

interface ICardFooter {
	children?: ReactNode;
}

export const CardFooter = ({ children }: ICardFooter) => (
	<div className="card-footer">
		{children}
	</div>
);
