import React from 'react';
import styles from './Textarea.module.scss';

export interface ITextareaProps extends React.ComponentProps<"textarea"> {
	error?: boolean;
}

export const Textarea = (props: ITextareaProps) => {

	const { className, error, ...rest } = props;

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.textarea);
		className && cssClasses.push(className);
		error && cssClasses.push(styles['isInvalid']);
		return cssClasses.filter(r => r).join(' ');
	}

	return (
		<textarea
			className={getCssClass()}
			{...rest}
		/>
	);
}
