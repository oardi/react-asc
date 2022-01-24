import React from 'react';
import styles from './ButtonGroup.module.scss';

export const ButtonGroup = (props: React.ComponentProps<"div">) => {

	const { children, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.buttonGroup);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} role="group" {...rest}>
			{children}
		</div>
	);
}
