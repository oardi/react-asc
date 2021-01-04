import React, { ReactElement } from 'react';
import { Card, CardBody } from '../../../lib';

interface IShowcaseExampleProps {
	children: ReactElement;
}

export const ShowcaseExample = ({ children }: IShowcaseExampleProps) => (
	<Card>
		<CardBody>
			{children}
		</CardBody>
	</Card>
);
