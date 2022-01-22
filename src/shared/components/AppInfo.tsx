import React, { useEffect, useState } from 'react';
import { COLOR, IconButton, modalService } from '../../lib';
import { InfoSolidIcon } from '../../showcase';
import { fileLoaderService, loggerService } from '../services';
import { Markdown } from './Markdown';

export const AppInfo = () => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => { init(); }, []);

	const init = async () => {
		const data = await fileLoaderService.get<string>('./changelog.md', { responseType: 'arraybuffer' });
		setMarkdownText(data.data);
	}

	const handleClick = () => {
		try {
			modalService.show('Changelog', <Markdown text={markdownText} />, { isDismissable: true });
		} catch (err) { loggerService.error(err); }
	};

	return (
		<IconButton
			color={COLOR.light}
			className="ml-auto"
			icon={<InfoSolidIcon />}
			onClick={handleClick}
		/>
	);
}
