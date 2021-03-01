import React, { useEffect, useState } from 'react';
import * as marked from 'marked';
import Prism from 'prismjs';

export interface IHighlighProps {
	text: string;
}

export const Highlight = ({ text }: IHighlighProps) => {
	const [textHighlighted, setTextHighlighted] = useState<string>(undefined);

	useEffect(() => {
		if (text) {

			console.warn(text);
			const markedText = marked(text);
			console.warn(markedText);

			const highlightedText = Prism.highlight(markedText, Prism.languages.html);
			console.warn(highlightedText);

			setTextHighlighted(highlightedText);
		}
	}, [text]);

	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: textHighlighted }}></div>
		</>
	);
}
