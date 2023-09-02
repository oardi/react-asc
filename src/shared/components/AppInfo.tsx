import type { AxiosResponse } from 'axios';
import { COLOR, IconButton, loggerService, modalService, useConstructor } from 'lib';
import { useState } from 'react';
import { InfoSolidIcon } from '../../main/assets';
import { fileLoaderService } from '../services';
import { Markdown } from './Markdown';

export const AppInfo = (): JSX.Element => {
	const [markdownText, setMarkdownText] = useState<string>('');

	useConstructor(async () => await init());

	const init = async (): Promise<void> => {
		const data: AxiosResponse<string> = await fileLoaderService.get<string>('/changelog.md', { responseType: 'arraybuffer' });
		setMarkdownText(data.data);
	};

	const handleClick = (): void => {
		try {
			void modalService.show('Changelog', <Markdown text={markdownText} />, { isDismissable: true });
		} catch (err) {
			loggerService.error(err);
		}
	};

	return <IconButton color={COLOR.primary} className="ml-auto" icon={<InfoSolidIcon />} onClick={handleClick} />;
};
