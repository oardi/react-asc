import React from 'react';
import { Layout } from './Layout';
import { List, ListItem, Typography } from '../../src';

export const AboutPage = () => {

	return (
		<Layout title="About">
			<Typography as="h3">
				Author
			</Typography>
			<Typography as="p">
				Ardian Shala
			</Typography>

			<Typography as="h3">
				Browser supported
			</Typography>
			<Typography as="p">
				Chrome
			</Typography>

			<Typography as="h3">
				Credits and Thanks
			</Typography>
			<Typography as="p">
				This React library aims to deliver reusable react components.
				Thank you React Team for providing such a awesome library :)
			</Typography>

			<Typography as="h3">
				Dependencies
			</Typography>
			<List>
				<ListItem>React</ListItem>
				<ListItem>Twitter Bootstrap</ListItem>
				<ListItem>PopperJs</ListItem>
			</List>

			<Typography as="h3">
				License
			</Typography>
			<Typography as="p">
				MIT
			</Typography>
		</Layout>
	)
}
