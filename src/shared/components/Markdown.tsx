import React, { useEffect, useState } from 'react';
import marked from 'marked';

export interface IMarkdownProps {
	text: string;
}

export const Markdown = ({ text }: IMarkdownProps) => {
	const [marddown, setMarddown] = useState<string>('');

	useEffect(() => {
		if (text) {
			setMarddown(marked(text));
		}
	}, [text]);

	return (
		<div dangerouslySetInnerHTML={{ __html: marddown }}></div>
	);
}
