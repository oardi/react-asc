import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Typography } from 'lib';
import snarkdown from 'snarkdown';
import { fileLoaderService, loggerService } from '../services';

export interface IMarkdownProps {
	text?: string;
	url?: string;
}

export const Markdown = ({ url, text }: IMarkdownProps) => {

	const [markdownText, setMarkdownText] = useState<string>('');

	useEffect(() => {
		if (url) { loadFile(url); }
	}, [url]);

	useEffect(() => {
		if (text) { renderText(text); }
	}, [text]);

	const loadFile = async (url: string) => {
		try {
			const response: AxiosResponse<string> = await fileLoaderService.get<string>(url, { responseType: 'text' });
			setMarkdownText(response.data);
		} catch (err) {
			loggerService.error(`Markdown: file ${url} not found.`);
		}
	};

	const renderText = async (text: string) => {
		setMarkdownText(snarkdown(text));
	};

	return (
		<Typography dangerouslySetInnerHTML={{ __html: markdownText }}></Typography>
	);
};
