import { List, ListItem, ListItemAvatar, ListItemAvatarSize, ListItemText, Typography } from 'src/lib';
import { Layout } from './Layout';

interface IContributor {
	firstName: string;
	lastName: string;
	avatarUrl: string;
	githubProfile: string;
}

export const AboutPage = (): React.JSX.Element => {
	const contributors: IContributor[] = [
		{
			firstName: 'Ardian',
			lastName: 'Shala',
			avatarUrl: 'https://avatars.githubusercontent.com/u/6142266?s=96&v=4',
			githubProfile: 'https://github.com/oardi',
		},
	];

	return (
		<Layout>
			<Typography as="h3">Contributors</Typography>
			<List isFlush={true}>
				{contributors.map(contributor => (
					<ListItem>
						<ListItemAvatar avatarSize={ListItemAvatarSize.md} avatar={<img src={contributor.avatarUrl} />} />
						<ListItemText primary={contributor.firstName + ' ' + contributor.lastName} />
					</ListItem>
				))}
			</List>

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
