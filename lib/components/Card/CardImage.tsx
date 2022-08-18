import React from 'react';
import styles from './CardImage.module.scss';

export const CardImage = (props: React.ComponentProps<'img'>) => {

	const { src, alt, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.cardImage);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<img
			className={getCssClasses()}
			src={src}
			alt={alt}
			{...rest}
		/>
	);
};
