import React, { ReactElement } from 'react';
import { Card } from '../../../lib';

interface IShowcaseExampleProps {
	children: ReactElement;
}

export const ShowcaseExample = ({ children }: IShowcaseExampleProps) => (
	<Card>
		{children}
	</Card>
);
