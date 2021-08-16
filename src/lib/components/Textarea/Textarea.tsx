import React from 'react';
import styles from './Textarea.module.scss';

export interface ITextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
}

export const Textarea = (props: ITextareaProps) => {

	const { className, ...rest } = props;

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.textarea);
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	}

	return (
		<textarea
			className={getCssClass()}
			{...rest}
		/>
	);
}
