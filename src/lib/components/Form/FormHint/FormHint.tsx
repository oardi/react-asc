import React, { FunctionComponent, HTMLAttributes } from 'react';

interface IFormHintProps {
}

export const FormHint: FunctionComponent<IFormHintProps & HTMLAttributes<HTMLElement>> = (props) => {

	const { children, className = 'form-text text-muted' } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<small className={getCssClasses()}>
			{children}
		</small>
	);
}
