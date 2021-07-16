import React from 'react';
import snarkdown from 'snarkdown';

export interface IMarkdownProps {
	text: string;
}

export const Markdown = ({ text }: IMarkdownProps) => {
	return (
		<div dangerouslySetInnerHTML={{ __html: snarkdown(text) }}></div>
	);
}
