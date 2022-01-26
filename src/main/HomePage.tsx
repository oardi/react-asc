import React from 'react';
import { Layout } from './Layout';
import { useHistory } from 'react-router-dom';
import { RocketSolidIcon } from './assets';
import { Button, Card, CardBody, CardText, CardTitle, Column, Row, Typography } from 'lib';

export const HomePage = () => {

	const history = useHistory();

	const handleClickGetStarted = () => {
		history.push('/gettingstarted');
	};

	return (
		<Layout className="home h-100 d-flex flex-column align-items-md-center justify-content-md-center pb-2">

			<Typography as="h1" className="text-center">
				react-asc
			</Typography>

			<Typography as="h2" className="mt-4 text-center">
				Build apps with React and react-asc
			</Typography>

			<div className="text-center">
				<Button className="mt-3" onClick={handleClickGetStarted} startIcon={<RocketSolidIcon />}>
					Getting started
				</Button>
			</div>

			<Row className="mt-3">
				<Column md={6}>
					<Card className='h-100'>
						<CardBody>
							<CardTitle>
								Well documentated
							</CardTitle>
							<CardText>
								This documentation is build using this library.
								Each available component is shown by example and usage.
							</CardText>
						</CardBody>
					</Card>
				</Column>

				<Column md={6}>
					<Card className='h-100'>
						<CardBody>
							<CardTitle>
								Compatible
							</CardTitle>
							<CardText>
								react-asc aims to deliver a collection of reusable unique ReactJs components to build modern web applications.
							</CardText>
						</CardBody>
					</Card>
				</Column>
			</Row>

		</Layout>
	);
}
