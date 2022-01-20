import React from 'react';

interface IFormHintProps extends React.ComponentProps<"small"> {
}

export const FormHint = (props: IFormHintProps) => {

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
