import React, { useEffect, useState } from 'react';
import { COLOR, IconButton, modalService } from 'lib';
import { InfoSolidIcon } from '../../main/assets';
import { fileLoaderService, loggerService } from '../services';
import { Markdown } from './Markdown';
import { AxiosResponse } from 'axios';

export const AppInfo = (): JSX.Element => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => { init(); }, []);

	const init = async (): Promise<void> => {
		const data: AxiosResponse<string> = await fileLoaderService.get<string>('/changelog.md', { responseType: 'arraybuffer' });
		setMarkdownText(data.data);
	};

	const handleClick = (): void => {
		try {
			modalService.show('Changelog', <Markdown text={markdownText} />, { isDismissable: true });
		} catch (err) { loggerService.error(err); }
	};

	return (
		<IconButton
			color={COLOR.primary}
			className="ml-auto"
			icon={<InfoSolidIcon />}
			onClick={handleClick}
		/>
	);
};
