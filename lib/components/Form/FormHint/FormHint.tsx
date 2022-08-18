import React from 'react';

export const FormHint = (props: React.ComponentProps<'small'>): JSX.Element => {

	const { children, className = 'form-text text-muted' } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<small className={getCssClasses()}>
			{children}
		</small>
	);
};
