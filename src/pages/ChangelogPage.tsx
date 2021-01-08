import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import * as marked from 'marked'
import changelogMd from '../../changelog.md';

export const ChangelogPage = () => {

	const [changelog, setChangelog] = useState<string>();

	useEffect(() => {
		setChangelog(marked(changelogMd));
	}, []);

	return (
		<Layout title="Changelog">
			<div dangerouslySetInnerHTML={{ __html: changelog }}></div>
		</Layout>
	);
}
