import React from 'react';
import { Layout } from './Layout';
import { Button, Card, CardBody, CardText, CardTitle, Column, Row, Typography } from '../lib';
import { useHistory } from 'react-router-dom';
import { RocketSolidIcon } from './assets';

export const HomePage = () => {

	const history = useHistory();

	const handleClickGetStarted = () => {
		history.push('/gettingstarted');
	};

	return (
		<Layout className="home h-100 d-flex align-items-md-center justify-content-md-center pb-2">
			<div>

				<Typography as="h1" className="text-center">
					react-asc
				</Typography>

				<Typography as="h2" className="mt-4 text-center">
					Build apps with React and react-asc
				</Typography>

				<div className="text-center">
					<Button className="mt-4" onClick={handleClickGetStarted} startIcon={<RocketSolidIcon />}>
						Getting started
					</Button>
				</div>

				<Row className="mt-4">
					<Column md={6} className="mt-3 mt-md-0">
						<Card>
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

					<Column md={6} className="mt-3 mt-md-0">
						<Card>
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

			</div>

		</Layout>
	);
}
