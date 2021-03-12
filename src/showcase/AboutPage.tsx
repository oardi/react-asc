import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import { fileLoaderService, Markdown } from '../shared';
import { loggerService } from '../lib';

export const AboutPage = () => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./pages/about.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="About">
			<Markdown text={markdownText} />
		</Layout>
	)
}
