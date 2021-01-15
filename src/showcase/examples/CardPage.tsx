import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from '../../lib';
import { withOptions } from './components';

const CardPageBase = () => {
	return (
		<>
			<Card>
				<CardBody>
					<CardTitle>Title</CardTitle>
					<CardSubtitle>SubTitle</CardSubtitle>
					<CardText>
						some card
					</CardText>
				</CardBody>
			</Card>
		</>
	);
}

export const CardPage = withOptions(CardPageBase);
