import React from 'react';
import { Typography } from '../lib';
import { Highlight } from '../shared';
import { Layout } from './Layout';

export const GettingStartedPage = () => {

	return (
		<Layout title="Getting started" className="pb-4">
			<Typography as="h3">
				Install react-asc
			</Typography>
			<Highlight text={`npm install react-asc`} />

			<Typography as="h3" className="mt-3">
				Install Twitter Bootstrap 4.6
			</Typography>
			<Highlight text={`npm install bootstrap@4.6`} />

			<Typography as="h3" className="mt-3">
				Include needed scss files
			</Typography>
			<Highlight text={`
				@import "~bootstrap/scss/bootstrap";
				@import "react-asc/react-asc.scss";`} />

			<Typography as="h3" className="mt-3">
				Install Twitter Bootstrap 4.6
			</Typography>
			<Highlight text={`
				import { Button } from 'react-asc';

				const MyApp = () => {
					return (
						<Button>some button</Button>
					)
				}`} />


			<Typography as="h3" className="mt-3">
				Codesandbox example
			</Typography>
			<Typography as="p">
				Click <a href="https://codesandbox.io/s/react-asc-example-8y9ob" target="blank">here</a> to see a simple example
			</Typography>

		</Layout>
	);
}
