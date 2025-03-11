import type { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import snarkdown from 'snarkdown';
import { Typography, loggerService } from 'src/lib';
import { fileLoaderService } from '../services';

export interface IMarkdownProps {
	text?: string;
	url?: string;
}

export const Markdown = ({ url, text }: IMarkdownProps): React.JSX.Element => {
	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => {
		if (url) {
			void loadFile(url);
		}
	}, [url]);

	useEffect(() => {
		if (text) {
			renderText(text);
		}
	}, [text]);

	const loadFile = async (url: string): Promise<void> => {
		try {
			const response: AxiosResponse<string> = await fileLoaderService.get<string>(url, { responseType: 'text' });
			setMarkdownText(response.data);
		} catch (err) {
			loggerService.error(`Markdown: file ${url} not found.`, err);
		}
	};

	const renderText = (text: string): void => {
		setMarkdownText(snarkdown(text));
	};

	return <Typography dangerouslySetInnerHTML={{ __html: markdownText }}></Typography>;
};
