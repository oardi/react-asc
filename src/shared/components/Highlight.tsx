import React, { useEffect, useState } from 'react';
import { fileLoaderService, loggerService } from '../services';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

import snarkdown from 'snarkdown';
import { AxiosResponse } from 'axios';

// if lineNumber -> add className="line-numbers"

export interface IHighlightProps {
	text?: string;
	url?: string;
	language?: string;
}

export const Highlight = ({ url, text, language = 'javascript' }: IHighlightProps) => {

	const [highlightedText, setHighlightedText] = useState<string>('');

	useEffect(() => {
		Prism.highlightAll();
	}, [highlightedText]);

	useEffect(() => {
		if (url) { loadFile(url); }
	}, [url]);

	useEffect(() => {
		if (text) { renderText(text); }
	}, [text]);

	const loadFile = async (url: string) => {
		try {
			const response: AxiosResponse<string> = await fileLoaderService.get<string>(url, { responseType: 'text' });
			setHighlightedText(response.data);
		} catch (err) {
			loggerService.error(`Highlight: file ${url} not found.`);
		}
	}

	const renderText = async (text: string) => {
		const snarked: string = snarkdown(text);
		setHighlightedText(snarked);
	}

	return (
		<>
			<pre style={{ margin: '0' }}>
				{url &&
					<code className={`language-${language}`}>
						{url && highlightedText}

					</code>
				}
				{text &&
					<code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlightedText }}>
						{url && highlightedText}
					</code>
				}
			</pre>
		</>
	);
}
