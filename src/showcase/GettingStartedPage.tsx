import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import { Markdown } from '../shared';
import { Layout } from './Layout';

export const GettingStartedPage = () => {

	const [markdownText, setMarkdownText] = useState<string>(undefined);
	const { loggerService, fileLoaderService } = useContext(AppContext);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./public/pages/getting-started.md', { responseType: 'arraybuffer' });
			setMarkdownText(data.data);
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="Getting started">
			<Markdown text={markdownText} />
		</Layout>
	);
}
