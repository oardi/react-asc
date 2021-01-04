import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import { Layout } from './Layout';
import * as marked from 'marked'

export const GettingStartedPage = () => {

	const [markup, setMarkup] = useState<string>(undefined);
	const { loggerService, fileLoaderService } = useContext(AppContext);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./public/pages/getting-started.md', { responseType: 'arraybuffer' });
			setMarkup(marked(data.data));
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="Getting started">
			<div dangerouslySetInnerHTML={{ __html: markup }}></div>
		</Layout>
	);
}
