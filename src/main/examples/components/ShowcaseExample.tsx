import React from 'react';
import { Card } from 'lib';

export const ShowcaseExample = ({ children }: React.ComponentProps<'div'>): JSX.Element => (
	<Card>
		{children}
	</Card>
);
