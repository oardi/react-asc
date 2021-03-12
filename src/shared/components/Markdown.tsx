import React from 'react';
import snarkdown from 'snarkdown';

export interface IMarkdownProps {
	text: string;
}

export const Markdown = ({ text }: IMarkdownProps) => {
	// needed?
	// const [marddown, setMarddown] = useState<string>('');

	// useEffect(() => {
	// 	if (text) {
	// 		setMarddown(marked(text));
	// 	}
	// }, [text]);

	return (
		<div dangerouslySetInnerHTML={{ __html: snarkdown(text) }}></div>
	);
}
