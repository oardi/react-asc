import React, { useEffect } from 'react';
import { FormControl, Link } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

export const LinkPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<React.ComponentProps<'a'>>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			href: new FormControl(settingValues.href, [], 'text', { label: 'href' }),
		});
	}, []);

	return (
		<>
			<Link href={settingValues.href}>some link text</Link>
		</>
	);
};

export const LinkPage: () => React.JSX.Element = withOptions<React.ComponentProps<'a'>>(
	LinkPageBase,
	{
		href: 'https://google.com',
	},
	'LinkPageBase'
);
