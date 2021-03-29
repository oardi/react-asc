import React, { useEffect, useState } from 'react';
import { fileLoaderService, loggerService, Markdown } from '../shared';
import { Layout } from './Layout';

export const GettingStartedPage = () => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./pages/getting-started.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="Getting started">
			<Markdown text={markdownText} />
		</Layout>
	);
}
