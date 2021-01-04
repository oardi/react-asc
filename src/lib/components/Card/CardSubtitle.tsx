import React, { ReactNode } from 'react';

interface ICardSubtitleProps {
	children?: ReactNode;
}

export const CardSubtitle = ({ children }: ICardSubtitleProps) => (
	<div className="text-muted mb-2">
		{children}
	</div>
);
