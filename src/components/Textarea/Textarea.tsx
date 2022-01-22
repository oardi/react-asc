import React from 'react';
import styles from './Textarea.module.scss';

export const Textarea = (props: React.ComponentProps<"textarea">) => {

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
