import React, { useEffect, useState } from 'react';
import { loggerService } from '../lib';
import { fileLoaderService, Markdown } from '../shared';
import { Layout } from './Layout';

export const GettingStartedPage = () => {

	const [markdownText, setMarkdownText] = useState<string>(undefined);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./public/pages/getting-started.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="Getting started">
			{/* <Highlight text={markdownText} /> */}
			<Markdown text={markdownText} />
		</Layout>
	);
}
