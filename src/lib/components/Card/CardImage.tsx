import React from 'react';

interface ICardImageProps {
	src?: string;
	alt?: string;
	className?: string;
}

export const CardImage = ({ src, alt, className = '', ...rest }: ICardImageProps) => {
	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('card-img-top');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<img
			className={getCssClasses()}
			{...rest} src={src}
			alt={alt}
		/>
	)
};
