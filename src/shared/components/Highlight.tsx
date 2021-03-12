import React, { useEffect, useState } from 'react';
import marked from 'marked';
import Prism from 'prismjs';

export interface IHighlighProps {
	text: string;
}

export const Highlight = ({ text }: IHighlighProps) => {
	const [textHighlighted, setTextHighlighted] = useState<string>('');

	useEffect(() => {
		if (text) {
			const markedText = marked(text);
			const highlightedText = Prism.highlight(markedText, Prism.languages.html, 'js');
			setTextHighlighted(highlightedText);
		}
	}, [text]);

	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: textHighlighted }}></div>
		</>
	);
}
