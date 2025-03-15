import { List, ListItem, Typography } from 'src/lib';
import { Layout } from './Layout';

export const AboutPage = (): React.JSX.Element => {
	return (
		<Layout>
			<Typography as="h3">Author</Typography>
			<Typography as="p">Ardian Shala</Typography>

			<Typography as="h3">Browser offically supported</Typography>
			<Typography as="p">Chrome</Typography>

			<Typography as="h3">Credits and Thanks</Typography>
			<Typography as="p">
				This React library aims to deliver reusable react components. <br />
				Thank you React Team for providing such a awesome library :)
			</Typography>

			<Typography as="h3">Dependencies</Typography>
			<List>
				<ListItem>React</ListItem>
				<ListItem>PopperJs</ListItem>
				<ListItem>Modern Normalize</ListItem>
			</List>

			<Typography as="h3">License</Typography>
			<Typography as="p">MIT</Typography>
		</Layout>
	);
};
