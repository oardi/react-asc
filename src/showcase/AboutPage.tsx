import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import { Layout } from './Layout';
import { Markdown } from '../shared';

export const AboutPage = () => {

	const [markdownText, setMarkdownText] = useState<string>(undefined);
	const { loggerService, fileLoaderService } = useContext(AppContext);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./public/pages/about.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="About">
			<Markdown text={markdownText} />
		</Layout>
	)
}
