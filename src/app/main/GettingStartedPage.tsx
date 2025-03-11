import { Link, List, ListItem, Typography } from 'src/lib';
import { Highlight } from '../shared';
import { Layout } from './Layout';

export const GettingStartedPage = (): React.JSX.Element => {
	return (
		<Layout className="pb-3 pt-0">
			<Typography as="h3">Install react-asc</Typography>
			<Highlight text={`npm install react-asc`} />

			<Typography as="h3" className="mt-3">
				Install Modern Normalize
			</Typography>
			<Highlight text={`npm install modern-normalize`} />

			<Typography as="h3" className="mt-3">
				Include needed scss files
			</Typography>
			<Highlight
				text={`
				@use "modern-normalize";
				@use "react-asc/react-asc.scss";`}
			/>

			<Typography as="h3" className="mt-3">
				Start using it
			</Typography>
			<Highlight
				text={`
				import { Button } from 'react-asc';

				const MyApp = () => {
					return (
						<Button>some button</Button>
					)
				}`}
			/>

			<Typography as="h3" className="mt-3">
				Examples
			</Typography>
			<List>
				<ListItem>
					<Link href="https://codesandbox.io/s/react-asc-example-8y9ob" target="blank">
						Codesandbox
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://stackblitz.com/edit/react-asc-example-ts" target="blank">
						Stackblitz Typescript
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://stackblitz.com/edit/react-asc-example-js" target="blank">
						Stackblitz Javascript
					</Link>
				</ListItem>
			</List>
		</Layout>
	);
};
