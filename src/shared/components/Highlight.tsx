import React, { useEffect, useState } from 'react';
import { fileLoaderService, loggerService } from '../services';
import Prism from "prismjs";
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import "prismjs/themes/prism-tomorrow.css";

// if lineNumber -> add className="line-numbers"

export interface IHighlightProps {
	text?: string;
	url?: string;
	language?: string;
}

export const Highlight = ({ url, language = 'javascript' }: IHighlightProps) => {

	const [highlightedText, setHighlightedText] = useState<string>('');

	useEffect(() => {
		Prism.highlightAll();
	}, [highlightedText]);

	useEffect(() => {
		if (url) { loadFile(url); }
	}, [url]);

	const loadFile = async (url: string) => {
		try {
			const response = await fileLoaderService.get<string>(url, { responseType: 'text' });
			setHighlightedText(response.data);
		} catch (err) {
			loggerService.error(`Highlight: file ${url} not found.`);
		}
	}

	return (
		<>
			<pre style={{ margin: '0' }}>
				<code className={`language-${language}`}>
					{highlightedText}
				</code>
			</pre>
		</>
	);
}
