import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import { Layout } from './Layout';
import * as marked from 'marked'

export const AboutPage = () => {

	const [markup, setMarkup] = useState<string>(undefined);
	const { loggerService, fileLoaderService } = useContext(AppContext);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const data = await fileLoaderService.get<string>('./public/pages/about.md', { responseType: 'arraybuffer' });
			setMarkup(marked(data.data));
		} catch (err) { loggerService.error(err); }
	}

	return (
		<Layout title="About">
			<div dangerouslySetInnerHTML={{ __html: markup }}></div>
		</Layout>
	)
}
