import React, { ReactNode } from 'react';

interface ICardTextProps {
	children?: ReactNode;
}

export const CardText = (props: ICardTextProps) => (
	<div className="card-text">
		{props.children}
	</div>
);
